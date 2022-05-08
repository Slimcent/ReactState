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

  removeCharacter = (index) => {
    const {people} = this.state
  
    this.setState({
      people: people.filter((person, i) => {
        return i !== index
      }),
    })
  }

  render(){
    const { people } = this.state

    return (
      <div className="">
        <h4>State in React</h4>
  
        <Table peopleData = {people} removeCharacter={this.removeCharacter}  />
      </div>
    );
  }
}

export default App;
