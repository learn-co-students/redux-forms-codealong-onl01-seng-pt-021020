import React, { Component } from 'react';

import { connect } from 'react-redux';
 
class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatchTodo(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add todo:</label>
            <input type="text" name="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchTodo: (formData) => dispatch( { type: 'ADD_TODO', payload: formData } )
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo)
