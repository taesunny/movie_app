import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    console.log("hello");
  }

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  // it is called after render()
  componentDidMount(props) {
    console.log("component renders");
  }

  componentDidUpdate(props) {
    console.log("i just updated");
  }

  componentWillUnmount(props) {
    console.log("Goodbye, cruel world");
  }

  render() {
    console.log("I'm rendering");

    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
