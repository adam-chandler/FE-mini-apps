import React from "react";
import "./App.css";
import Header from "./components/Header";
import LetterSelector from "./components/LetterSelector";
import Lives from "./components/Lives";
import Letters from "./components/Letters";
import CatergoryChooser from "./components/CatergoryChooser";

// const lives = 10;

class App extends React.Component {
  state = {
    lives: 10,
    chosenSolution: ["T", "U", "N", "A", " ", "P", "I", "E"],
    currentSolution: ["", "", "", "", <br />, "", "", ""],
    chosenLetters: []

    /*
    totalLives: 10,
    word: 'TUNA PIE',
    guesses: []
    */
  };

  render() {
    // const guessedStateOfWord = this.state.word.split('').map((letter) => {
    //   return this.state.guesses.includes(letter) ? letter : ' '
    // })
    console.log(this.state.chosenLetters); //console.logs twice on submit
    return (
      <div className="App">
        <Header />
        <CatergoryChooser />
        <LetterSelector
          chosenLetters={this.state.chosenLetters}
          addNewLetter={this.addNewLetter}
        />
        <Lives lives={this.state.lives} />
        <Letters
          chosenLetters={this.state.chosenLetters}
          chosenSolution={this.state.chosenSolution}
          currentSolution={this.state.currentSolution}
        />
      </div>
    );
  }

  addNewLetter = (letter, event) => {
    event.preventDefault();
    this.setState(currentState => {
      return {
        chosenLetters: [...currentState.chosenLetters, letter.toUpperCase()]
      };
    });

    let newSolution = this.state.currentSolution.map((space, i) => {
      return this.state.chosenSolution[i] === letter
        ? letter.toUpperCase()
        : space;
    });
    this.setState({ currentSolution: newSolution });
    this.setState(currentState => {
      return { lives: currentState.lives - 1 };
    });
  };
}

export default App;
