import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className='container'>
        <h3>Class-Based Component</h3>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement} class="form-control">Increment</button>
      </div>
    );
  }
}

export default ClassComponent;