// src/App.jsx
import {useState} from 'react'
import './App.css';

const App = () => {

  // const [person, setUser] = useState({
    //   firstName: 'Mary',
    //   lastName: 'Moon',
    //   hasPets: false,
    //   age: 24
    // })
    // console.log(person)  
  const [mode, setMode] = useState("light")
  const handleMode = (modeValue)=>{
    console.log(modeValue)
    setMode(modeValue)
    console.log('this is mode', mode)
  }
  
  return (
    <>
      <div className={mode}>
        <h1>Hello world!</h1>
        {/* <p>
          Hello my name is {person.firstName}{person.lastName},
          I am {person.age} years old,
          and {person.hasPets ? 'Have':'Dont have'} pets.
        </p> */}
      </div>
      <div>
        <button onClick={() => handleMode('dark')}>Dark Mode</button>
        <button onClick={() => handleMode('light')}>Light Mode</button>
      </div>
    </>  
  );
};

export default App;
