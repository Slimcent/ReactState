import React, { Component } from 'react';
import Table from './components/table';
import './App.css';

class App extends Component {
  state = {
    people: [
      {
        name: 'King',
        job: 'Software Developer',
      },
      {
        name: 'Slim',
        job: 'Software Engineer',
      },
      {
        name: 'Pope',
        job: 'Scientist',
      },
      {
        name: 'Law',
        job: 'Entertainer',
      },
    ],
  }

  render(){
    const { people } = this.state

    return (
      <div className="">
        <h4>State in React</h4>
  
        <Table peopleData = {people} />
      </div>
    );
  }
}

export default App;
