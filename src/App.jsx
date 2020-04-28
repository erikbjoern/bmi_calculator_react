import React, { Component } from 'react'
import Form from "./components/Form"
import { calculateBmi } from "./helpers/bmiHelper"
import { UndrawHealthyHabit } from "react-undraw-illustrations"


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
      <div className="ui inverted very padded segment" style={{height: "1000px"}}>
        <Form
        weight={this.state.weight}
        height={this.state.height}
        onChangeHandler={this.onChangeHandler}
        onSubmitHandler={this.onSubmitHandler}
        />
        <div className="ui big image">
          <UndrawHealthyHabit
            primaryColor='#6c68fb'
            accentColor='#43d1a0'
            height='500px'
            skinColor="orange"
          />
        </div> 
       </div>
    );
  }
}
export default App;