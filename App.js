import React from 'react';
import ErrorMessage from './ErrorMessage.js'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      randomNumber: '',
      guessedNumber: '',
      guessedNumbers: [],
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
    let parsedGuess = parseInt(guessedNumber)
    this.setState({guessedNumber: parsedGuess})
  }

  addGuessedNumber(guessedNumber) {
    let guessedNumbers = this.state.guessedNumbers
    guessedNumbers.push(guessedNumber)
    this.setState({guessedNumbers: guessedNumbers})
  }

  handlePress() {
    this.compareNumbers()
    this.addGuessedNumber(this.state.guessedNumber)
  }
  compareNumbers() {
    let errorMessage
    if(this.state.guessedNumber > this.state.randomNumber) {
      this.setState({errorMessage: 'Too high.' })
    } else if (this.state.guessedNumber < this.state.randomNumber) {
      this.setState({errorMessage:'Too low.'})
    } else if (this.state.guessedNumber === this.state.randomNumber) {
      this.setState({errorMessage:'That is it!'})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.randomNumber ? this.state.randomNumber : 'Loading'}</Text>
        <Text>{this.state.guessedNumber ? this.state.guessedNumber : ''}</Text>
        <Text>Guess a number between 1 and 100 :-P</Text>
        <TextInput
          style={{height: 40, width: 60, borderColor: 'gray', borderWidth: 1, marginLeft: 150}}
          onChangeText={(text) => this.setGuessedNumber(text)}
          >

        </TextInput>
        <Button title="Submit" onPress={() => this.handlePress()}></Button>
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
