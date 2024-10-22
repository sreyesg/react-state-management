// src/App.jsx
import {useState} from 'react'
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  console.log(isDarkMode)
  return (
    <div className={isDarkMode ? 'dark':'light'}>
      <h1>Hello world!</h1>
      
    </div>
  );
};

export default App;
