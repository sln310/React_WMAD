import React, { Component } from "react";
//import images
import left from "../assets/look-left.jpe";
import right from "../assets/look-right.jpeg";

class ChallengeOne extends Component {
  //declare the state here
  state = { url: left };

  //click left/right button handler goes here
  handleClickLeft = () => {
    this.setState({ url: left });
    return;
  };

  handleClickRight = () => {
    this.setState({ url: right });
    return;
  };

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img className="ch1" src={this.state.url} alt="" />
        </div>
        <button className="btn" onClick={this.handleClickLeft}>
          ⭠
        </button>
        <button className="btn" onClick={this.handleClickRight}>
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;
