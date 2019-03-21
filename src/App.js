import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personState, setPersonState ] = useState({
    person: [
      {name: "Max", age: 28},
      {name: "Manu", age: 27},
      {name: "Stephanie", age: 29}
    ]
  });

  const switchNameHandler = () => {
    console.log('clicked')
    setPersonState({
      person: [
        {name: "Binh", age: 28},
        {name: "Truong", age: 27},
        {name: "Anh", age: 29}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.person[0].name} age={personState.person[0].age} />
      <Person name={personState.person[1].name} age={personState.person[1].age} >My Hobbies: Racing</Person>
      <Person name={personState.person[2].name} age={personState.person[2].age} />
    </div>
  );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
}

export default app;


