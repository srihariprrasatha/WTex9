import './App.css';
import React, {Component} from 'react';

class Controlled extends React.Component{
  constructor(props){
    super(props);
    this.state={value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (event){
    this.setState({value: event.target.value});
  }
  handleSubmit (event){
    alert('You have successfully submitted the input' + this.state.value);
    event.preventDefault();
  }
  render()
  {
    return(
      <form onSubmit={this.handleSubmit}>
        <h2>FORM</h2>
        <label>Name:    <br></br><input type="text" ref={this.input}/></label>
        <br></br>
        <label>College Name:    <br></br><input type="text" ref={this.input}/></label><br></br>    <br></br>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}
export default Controlled;