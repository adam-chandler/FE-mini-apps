import React from "react";

class CatergoryChooser extends React.Component {
  state = {
    film: {
      chosenSolution: [
        "F",
        "I",
        "N",
        "D",
        "I",
        "N",
        "G",
        <br />,
        "N",
        "E",
        "M",
        "O"
      ],
      currentSolution: [
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        <br />,
        " ",
        " ",
        " ",
        " "
      ]
    },
    tv: {
      chosenSolution: ["C", "O", "U", "N", "T", "D", "O", "W", "N"],
      currentSolution: ["", "", "", "", "", "", "", "", ""]
    },
    food: {
      chosenSolution: ["T", "U", "N", "A", " ", "P", "I", "E"],
      currentSolution: ["", "", "", "", <br />, "", "", ""]
    }
  };
  render() {
    return (
      <select id="catergory" onChange={this.handleCatergory}>
        <option value="">Select Catergory</option>
        <option value="film">Film</option>
        <option value="tv">TV</option>
        <option value="food">Food</option>
      </select>
    );
  }
}

export default CatergoryChooser;
