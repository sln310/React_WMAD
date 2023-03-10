import React, { Component } from "react";

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: [],
  };

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 seconds
    setTimeout(() => {
      this.setState({ arr: studentList });
    }, 3000);
  }

  //random button handler
  randomize = (array) => {
    let i = array.length,
      j;
    const newA = [...array];

    //shuffle the array and set the state
    while (i != 0) {
      j = Math.floor(Math.random() * i);
      i--;

      [newA[i], newA[j]] = [newA[j], newA[i]];
    }

    // shuffle = ([...array]) => {
    // for (let i = arr.length - 1; i >= 0; i--) {
    //   j = Math.floor(Math.random() * (i + 1));
    //   [newArrr[i], newArrr[j]] = [newArrr[j], newArrr[i]];
    // }

    this.setState({ arr: newA });
  };

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {/* {this.state.arr.map((prop) => {
              return <li key={prop}>{prop}</li>;
            })} */}

            {this.state.arr.map((student, index) => {
              return <li key={index}>{student}</li>;
            })}
          </ul>
        </div>
        <button
          className="btn large"
          onClick={() => this.randomize(studentList)}
        >
          Randomize
        </button>
      </>
    );
  }
}
