import React from "react";

const Letters = props => {
  return (
    <div className="guessedLetters">
      <ul>
        <li key="title" id="guessedLettersTitle">
          Guessed Letters:{" "}
        </li>
        {props.chosenLetters.map(letter => (
          <li key={letter}>{letter}</li>
        ))}
      </ul>
      <ol className="solution">
        {props.currentSolution.map((letter, i) =>
          letter ? (
            <li key={`${letter} ${i}`}>{letter}</li>
          ) : (
            <li key={`space ${i}`}> __ </li>
          )
        )}
      </ol>
    </div>
  );
};

export default Letters;
