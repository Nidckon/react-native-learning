import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, StyleSheet } from 'react-native';

export default class NormalInput extends Component {
    static propTypes = {
        onTextInput: PropTypes.func,
        value: PropTypes.string,
        style: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ])
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextInput
                style={styles.textView}
            />
        );
    }
}

const styles = StyleSheet.create({
    textView: {
        minWidth: 100,
        minHeight: 40
    }
});