import React, { Component } from 'react';

class Form extends Component{
  constructor(props){
    super(props)
    this.state={
      userMood:'',
      name: '',
    }
  }

  //handle change to update the user's mood
  handleUpdate(event){
     const target = event.target
     const attribute = target.name
     const value = target.value
     console.log(value)
     this.setState({[attribute]: value})
   }

  //takes handleSubmit and runs it
handleSubmit(event){
  event.preventDefault()
  this.props.submitHandler(this.state)

}


    //  <form onSubmit={this.props.submitHandler.bind(this)}>

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Enter your mood:</label>
        <input type="text" name="userMood" onChange={this.handleUpdate.bind(this)}/> <br/><br/>
        <label>Enter your name:</label>
        <input type="text" name="name" onChange={this.handleUpdate.bind(this)}/>
        <input type="submit" value="Hit here"/>
      </form>
    )
  }

}

export default Form
