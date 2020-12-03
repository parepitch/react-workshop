import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';

class App extends Component {

  state = { //default value
    username: "Parepitch",
    password: "",
    result:   "",
  };
 
  handleInput = event => { //function handleInput
    
    const {name, value} = event.target;
    this.setState({ [name]: value });

  }

  handleSubmit = event => {
    event.preventDefault(); //click and break
    this.setState({
      result: this.state.username + ' - ' + this.state.password
    });

  }

  render() {
    return(
      <div className="App">
         <input 
           name = "username"
           value = {this.state.username}
           placeholder = "Please Enter Username"
           onChange={this.handleInput}/>
         <br />

         <input 
           name = "password"
           value = {this.state.password}
           placeholder = "Please Enter Password"
           onChange={this.handleInput}/>
         <br />

         <button
          //onClick={ () => this.setState({username: 'Pare'}) }>
          onClick={ this.handleSubmit }>
            Submit
         </button>

         <div> { this.state.result } </div>

         {/* <br />
         <label>Username: { this.state.username}</label>

         <br />
         <label>Password: { this.state.password}</label> */}

      </div>
    )
  }
}

export default App;
