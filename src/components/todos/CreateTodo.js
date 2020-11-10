import React, { Component } from 'react';
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  //handleChange() will always be bound to the particular instance of the component it is defined in.

  // The reason we set a value={this.state.text} is because we want this to be a controlled form. Meaning every key stroke
  // within input will call a setState from within handleChange, and the component will rerender and display the new value
  // for this.state.text

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              onChange={event => this.handleChange(event)}
              value={this.state.text}
            />
          </p>
          <input type="submit" />
          {this.state.text}
       </form>
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
// In this component, we are not currently concerned with writing a mapStateToProps() function (the first argument passed
// to connect) as this component doesn't need any state. Since we only need to dispatch an action here and we are not
//getting information from our store, we can use null instead of mapStateToProps as the first argument.
