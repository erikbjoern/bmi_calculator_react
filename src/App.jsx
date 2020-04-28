import React, { Component } from 'react'
import Form from "./components/Form"
import { calculateBmi } from "./helpers/bmiHelper"
import { UndrawHealthyHabit } from "react-undraw-illustrations"
import Message from './components/Message';


 class App extends Component {
    state = {
      weight: "",
      height: "",
      bmiValue: "",
      bmiMessage: ""
    };
  
    onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

    onSubmitHandler = e => {
      e.preventDefault();
      const [bmiValue, bmiMessage] = calculateBmi(this.state.weight, this.state.height)
      this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage })
    }

  render() {
    return (
      <div className="ui inverted very padded segment" style={{height: "1000px", display: "flex", flexDirection: "column", padding: "0 30%"}}>
        <div style={{padding: "20px"}}>
        <Form
        weight={this.state.weight}
        height={this.state.height}
        onChangeHandler={this.onChangeHandler}
        onSubmitHandler={this.onSubmitHandler}
        />
        </div>
        <div className="ui big image">
          <UndrawHealthyHabit
            primaryColor='#6c68fb'
            accentColor='#43d1a0'
            height='500px'
            skinColor="orange"
          />
        </div>
        <div style={{fontSize: "300%", padding: "20px"}}>
        {this.state.bmiValue && (
          <Message
          bmiValue={this.state.bmiValue}
          bmiMessage={this.state.bmiMessage}
          />
        )}
        </div>
      </div>  
    );
  }
}
export default App;