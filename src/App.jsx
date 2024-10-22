// src/App.jsx
import {useState} from 'react'
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  console.log(isDarkMode)
  const [person, setUser] = useState({
    firstName: 'Mary',
    lastName: 'Moon',
    hasPets: true,
    age: 24
  })
  console.log(user)
  
  return (
    <div className={isDarkMode ? 'dark':'light'}>
      <h1>Hello world!</h1>
      
    </div>
  );
};

export default App;
