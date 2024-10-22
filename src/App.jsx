// src/App.jsx
import {useState} from 'react'
import './App.css';

const App = () => {
  // Define person state
  // const [person, setUser] = useState({
    //   firstName: 'Mary',
    //   lastName: 'Moon',
    //   hasPets: false,
    //   age: 24
    // })
    // console.log(person)  
  
  // Define 'mode' state 
  const [mode, setMode] = useState("light")
  console.log(mode)
  // Define handler function

  const handleMode = (modeValue)=>{
    console.log(modeValue)
    setMode(modeValue)
  }  
  // Add cats state
  const [cats, setCats] = useState([
    {name:'Myshka', breed:'Ragdoll'},
    {name: 'Malta', breed:'Turkish Angora'},
    ])
  
  console.log(cats, 'Cats State')
  
  const addCat = (newCat) => {
    console.log('new Cat triggered')
    const newCatsArray = [...cats, newCat]
    setCats(newCatsArray);
  }
  
  return (
    // EXAMPLE ONE
    // <>
    //   <div className={mode}>
    //     <h1>Hello world!</h1>
    //     {/* <p>
    //       Hello my name is {person.firstName}{person.lastName},
    //       I am {person.age} years old,
    //       and {person.hasPets ? 'Have':'Dont have'} pets.
    //     </p> */}
    //   </div>
    //   <div>
    //     <button onClick={() => handleMode('dark')}>Dark Mode</button>
    //     <button onClick={() => handleMode('light')}>Light Mode</button>
    //     <button onClick={() => handleMode('neon')}>neon Mode</button>
    //     <button onClick={() => handleMode('night')}>night Mode</button>
    //   </div>
    // </>  
    // EXAMPLE TWO: CATS STATE
    <>
      <button 
        onClick={() => addCat({name:'Kira', breed: 'Ragamuffin'})}>Add a cat
      </button>
    </>
  );
};

export default App;
