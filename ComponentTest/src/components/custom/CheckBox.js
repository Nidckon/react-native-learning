import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CheckBox as NativeCheckBox} from 'react-native';

export default class CheckBox extends Component {
    static propTypes = {
        value: PropTypes.bool,
        disabled: PropTypes.bool,
        onValueChange: PropTypes.func,
        onChange: PropTypes.func,
        testID: PropTypes.string,
        style: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
            PropTypes.shape({})
        ])
    };

    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);

        this.state = {
            checked: props.value === undefined ? false : props.value
        }
    }

    onValueChange() {
        this.setState(prevState => (
            {checked: !prevState.checked}
        ));
        if (this.props.onValueChange !== undefined) {
            this.props.onValueChange();
        }
    }

    render() {
        return (
            <NativeCheckBox
                style={this.props.style}
                value={this.state.checked}
                onValueChange={this.onValueChange}
                onChange={this.props.onChange}
                testID={this.props.testID}
                disabled={this.props.disabled}
            />
        );
    }
}