import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export default class WithParams extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>FromParams: {this.props.name}</Text>
        );
    }
}