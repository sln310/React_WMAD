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
      this.setState({ arr: studentList }, 3000);
    });
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    const shuffle = ([...arr]) => {
      for (let i = arr.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };
    this.setState({
      arr: [...this.shuffle(this.state.arr)],
    });
  };

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {/* display the list of students by iterating through the array */}
            {this.state.arr.map((prop) => {
              return <li key={prop}> {student}</li>;
            })}
          </ul>
        </div>
        <button className="btn large">Randomize</button>
      </>
    );
  }
}
