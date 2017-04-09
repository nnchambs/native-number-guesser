import React from 'react';
import ErrorMessage from './ErrorMessage.js'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      randomNumber: '',
      guessedNumber: '',
      errorMessage: ''
    }
  }

  componentDidMount() {
    this.generateRandomNumber()
  }

  generateRandomNumber() {
    this.setState({randomNumber: Math.floor(Math.random() * 100)})

  }

  setGuessedNumber(guessedNumber) {
    this.setState({guessedNumber: parseInt(guessedNumber)})
  }

  handlePress() {
    this.compareNumbers()
  }

  compareNumbers() {
    if(this.state.guessedNumber > this.state.randomNumber) {
      this.setState({errorMessage: 'Too high.' })
    } else if (this.state.guessedNumber < this.state.randomNumber) {
      this.setState({errorMessage:'Too low.'})
    } else if (this.state.guessedNumber === this.state.randomNumber) {
      this.setState({errorMessage:'That is it!'})
    }
  }

  resetGame() {
    this.setState({
    guessedNumber: '',
    guessedNumbers: [],
    errorMessage: ''
    })
    this.generateRandomNumber()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Guess a number between 1 and 100 :-P</Text>
        <TextInput
          style={{height: 40, width: 60, borderColor: 'gray', borderWidth: 1, marginLeft: 150}}
          onChangeText={(text) => this.setGuessedNumber(text)}
          >
        </TextInput>
        <Button title="Submit" onPress={() => this.handlePress()}></Button>
        <Button title="Reset" onPress={() => this.resetGame()}></Button>
        <ErrorMessage errorMessage={this.state.errorMessage}></ErrorMessage>
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
