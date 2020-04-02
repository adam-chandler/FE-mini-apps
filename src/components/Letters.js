import React from "react";

const Letters = ({ chosenLetters, chosenSolution, currentSolution }) => {
  return (
    <div className="guessedLetters">
      <ul>
        <li key="title" id="guessedLettersTitle">
          Guessed Letters:{" "}
        </li>
        {chosenLetters.map((letter, i) => (
          <li key={`${letter} ${i}`}>{letter}</li>
        ))}
      </ul>
      <ol className="solution">
        {currentSolution.map((letter, i) =>
          letter || letter === chosenLetters[chosenLetters.length - 1] ? (
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
