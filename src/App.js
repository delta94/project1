import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: "Max", age: 28},
      {name: "Manu", age: 27},
      {name: "Stephanie", age: 29}
    ]
  }

  switchNameHandler = () => {
    console.log('clicked')
    this.setState({
      person: [
        {name: "Binh", age: 28},
        {name: "Truong", age: 27},
        {name: "Anh", age: 29}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} >My Hobbies: Racing</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
