import Table from './components/table';
import './App.css';

function App() {
  const people = [
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
  ]

  return (
    <div className="">
      <h4>State in React</h4>

      <Table peopleData = {people} />
    </div>
  );
}

export default App;
