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
}
