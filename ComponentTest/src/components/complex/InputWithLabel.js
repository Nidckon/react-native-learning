import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import NormalInput from "../custom/NormalInput";

export const ALIGNMENT = {
    LEFT: 'left',
    CENTER: 'center',
    RIGHT: 'right',
    STRETCH: 'stretch'
};

export default class InputWithLabel extends Component {
    static propTypes = {
        label: PropTypes.string.isRequired,
        defaultValue: PropTypes.string,
        onTextInput: PropTypes.func,
        align: PropTypes.oneOf([
            ALIGNMENT.STRETCH,
            ALIGNMENT.LEFT,
            ALIGNMENT.CENTER,
            ALIGNMENT.RIGHT
        ]),
        style: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ])
    };

    constructor(props) {
        super(props);
        this.getAlign = this.getAlign.bind(this);
    }

    getAlign() {
        switch (this.props.align) {
            case ALIGNMENT.CENTER: return styles.alignCenter;
            case ALIGNMENT.RIGHT: return styles.alignRight;
            case ALIGNMENT.STRETCH: return styles.alignStretch;
            case ALIGNMENT.LEFT: return styles.alignLeft;
            default: return undefined;
        }
    }

    render() {
        return (
            <View style={[styles.oneRow, this.getAlign()]}>
                <Text>{this.props.label}</Text>
                <NormalInput
                    onTextInput={this.props.onTextInput}
                    value={this.props.defaultValue}></NormalInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   oneRow: {
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center'
   },
   alignLeft: {
       justifyContent: 'flex-start',
       backgroundColor: '#aaa'
   },
    alignCenter: {
        justifyContent: 'center',
        backgroundColor: '#aaa'
    },
    alignRight: {
        justifyContent: 'flex-end',
        backgroundColor: '#aaa'
    },
    alignStretch: {
        justifyContent: 'space-between',
        backgroundColor: '#aaa'
    }
});