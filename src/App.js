import React from 'react';
import { useEffect, useState } from 'react';
import Character from './components/Character';
import axios from 'axios';
import './App.css';
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characterDetails, setCharacterDetails] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/?')
    .then((res) => {
      console.log(res.data.results); 
      setCharacterDetails(res.data.results);
    })
    .catch((err) => {
      console.log("err");
    })
  }, [])


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characterDetails.map(ch =>{
          return <Character key={ch.id} info={ch} />
        })
      }
    </div>
  );
}

export default App;
