import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
  state = {
    text: ""
  }

  formInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input type="text" name="text" value={this.state.text} onChange={(event)=>{this.formInputChange(event)}}/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
