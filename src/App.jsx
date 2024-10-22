// src/App.jsx
import {useState} from 'react'
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  console.log(isDarkMode)
  const [person, setUser] = useState({
    firstName: 'Mary',
    lastName: 'Moon',
    hasPets: false,
    age: 24
  })
  console.log(person)
  
  return (
    <div className={isDarkMode ? 'dark':'light'}>
      <h1>Hello world!</h1>
      <p>
        Hello my name is {person.firstName}{person.lastName},
        I am {person.age} years old,
        and {person.hasPets ? 'Have':'Dont have'} pets.
      </p>
      
    </div>
  );
};

export default App;
