import React from 'react';
import { Text } from 'react-native';


export default class ErrorMessage extends React.Component {
  render() {
    return (
    <Text>{this.props.errorMessage}</Text>
    )
  }
}
