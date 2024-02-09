import './App.css';
import { people } from './data';

//Change it to show two separate lists one after another: 
//Chemists and Everyone Else. Like previously, you can determine whether 
//a person is a chemist by checking if person.profession === 'chemist'.



function App() {
  return (
    <div className="App">
      <People name={props.name} >
    </div>
  );
}

const People = (props) => {
  <div>
    {props.name}
  </div>
};

export default App;