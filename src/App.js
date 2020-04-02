import React from "react";
import "./App.css";
import Header from "./components/Header";
import LetterSelector from "./components/LetterSelector";
import Lives from "./components/Lives";
import Letters from "./components/Letters";

class App extends React.Component {
  state = {
    lives: 10,
    chosenSolution: ["A", "D", "A", "M", " ", "C", "H"],
    currentSolution: ["", "", "", "", <br />, "", ""],
    chosenLetters: ["A", "B", "E"]
  };

  render() {
    console.log(this.state.chosenLetters);
    return (
      <div className="App">
        <Header />
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

  addNewLetter = letter => {
    this.setState(currentState => {
      return {
        chosenLetters: [...currentState.chosenLetters, letter.toUpperCase()]
      };
    });
  };
}

export default App;
