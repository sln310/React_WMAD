import React from "react";
import ReactDOM from "react-dom";
import Child from "./Child";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World~</h1>
        <Child />
      </div>
    );
  }
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
