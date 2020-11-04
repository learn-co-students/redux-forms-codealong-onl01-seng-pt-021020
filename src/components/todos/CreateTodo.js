import React, { Component } from 'react'
import { connect } from 'react-redux';

// class CreateTodo extends Component {
//   render() {
//     return(
//       <div>
//         Create Todo Component
//       </div>
//     )
//   }
// }

// export default CreateTodo;

class CreateTodo extends Component {

  state = {
    text: '',
  }

  // handleChange(event) {
  //   this.setState({
  //     text: event.target.value
  //   })
  // }
  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
  // when handleSubmit is called, whatever is currently sroted in this.state will be sent to 
  // the reducer via dispatched action. 

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            {/* <input type="text" onChange={(event) => this.handleChange(event)}/> */
            <input type="text" onChange={this.handleChange} value={this.state.text}/>}
              
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
  }
}
 
// export default CreateTodo;
export default connect(null, mapDispatchToProps)(CreateTodo)

// 1. we need to update the state whenever someone types something into the form. 
//    - line 22 says everytime the input field changes we should call our handleChange function. 
//    - class methods are called the context of the prototype chain, not an instance.
//    - switching handleChange to an arrow function will now always find the function bound to the  
//      particular instance of the component it is defined in. 

// 2. Now we need to handle when a user clicks submit, we dispatch an action to the store.
//    - 