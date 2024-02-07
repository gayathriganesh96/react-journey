import './App.css';
import { People } from './People';

function App() {
  const people = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 20 },
    { id: 4, name: 'David', age: 35 },
    { id: 5, name: 'Eve', age: 22 }
  ];

  // Sort the array by age
  people.sort((a, b) => a.age - b.age);

  // Filter out people older than 20 and assign the result to a new variable
  const filteredPeople = people.filter(person => person.age > 20);

  return (
    <div className="App">
      <h1>Array Values</h1>
      {people.map((person, key) => (
        <People key={person.id} name={person.name} age={person.age} />
      ))}
      <h2>Display people above 20</h2>
      {filteredPeople.map((person, key) => (
        <People key={person.id} name={person.name} age={person.age} />
      ))}
    </div>
  );
}

export default App;