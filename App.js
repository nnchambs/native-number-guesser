import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      randomNumber: '',
      guessedNumber: ''
    }
  }

  componentDidMount() {
    this.setState({randomNumber: Math.floor(Math.random() * 100)})
  }

  setGuessedNumber(guessedNumber) {
    this.setState({guessedNumber: guessedNumber})
  }

  compareNumbers() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.randomNumber ? this.state.randomNumber : 'Loading'}</Text>
        <Text>Guess a number between 1 and 100 :-P</Text>
        <TextInput
          style={{height: 40, width: 60, borderColor: 'gray', borderWidth: 1}}
          onChangeText={({text}) => this.setGuessedNumber({text})}
          >

        </TextInput>
        <Button title="Submit" onPress={() => this.compareNumbers()}></Button>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
