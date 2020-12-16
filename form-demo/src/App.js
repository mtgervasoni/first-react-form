import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayMood from './DisplayMood'
import Form from './Form'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      mood: 'Sleepy',
      name: 'Bob'
    }
  }

// need handleSubmit to update state
handleSubmit(form){
  //prevents conventional submit - doesn't attempt to send to server
  console.log(form.userMood)
  //TO update State:
  this.setState({mood: form.userMood, name: form.name})
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DisplayMood name={this.state.name} mood={this.state.mood}/>
        <Form submitHandler={this.handleSubmit.bind(this)}/>

      </div>
    );
  }
}

export default App;
