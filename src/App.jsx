import React, { Component } from 'react'
import Form from "./components/Form";

 class App extends Component {
    state = {
      weight: "",
      height: ""
    };
  
    onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <Form
        weight={this.state.weight}
        height={this.state.height}
        onChangeHandler={this.onChangeHandler}
        />
      </div>
    );
  }
}
export default App;