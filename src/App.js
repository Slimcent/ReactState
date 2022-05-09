import React, { Component } from 'react';
import Table from './components/table';
import Form from './components/form';
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

  handleSubmit = people => {
    this.setState({people: [...this.state.people, people]});
  }

  render(){
    const { people } = this.state

    return (
      <div className="">
        <h4>State in React</h4>

        <Form handleSubmit = {this.handleSubmit} />
        <Table peopleData = {people} removeCharacter={this.removeCharacter}  />
      </div>
    );
  }
}

export default App;
