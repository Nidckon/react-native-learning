import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export default class WithContent extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]).isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>{this.props.children}</Text>
        );
    }

}