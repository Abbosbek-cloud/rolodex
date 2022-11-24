import { Component } from "react";

// defining a class component
// class components should extend {Component} from react
export default class MyComponent extends Component {
  // class components' constructor
  // here you can get props
  constructor() {
    // super
    super();
    // initialize state
    this.state = {
      // state properties
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: 10 });
          }}
        >
          Incr
        </button>
        <button>Decr</button>
      </div>
    );
  }
}
