// import React, { Component } from 'react';
// import Task from './Task';
// import List from './List';

// class ClassBased extends Component {
//   state = {
//     text: '...',
//     arr: ['str1', 'str2', 'str3']
//   }


//   textHandler = () => {
//     this.setState({arr: [...this.state.arr, this.state.text]})
//   }

//   changeHandler = (event) => {
//     this.setState({text: event.target.value})
//   }

//   render () {
//     return (
//       <div>
//         <Task 
//           text={'Some text...'}
//         />
//         <input 
//           type='text'
//           text={this.state.text}
//           onChange={this.changeHandler}
//         />
//         <button onClick={this.textHandler}>Button</button>
//         <p>Text: {this.state.text}</p>
//         <List 
//           arr={this.state.arr}
//         />
//       </div>
//     )
//   }
// }

// export default ClassBased;