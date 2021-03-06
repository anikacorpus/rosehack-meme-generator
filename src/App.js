import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-mdl';

// get api key from giphy and set it to API_KEY variable.
const API_KEY = ''

const App = (props) => {
  const [memeUrl, setMemeUrl] = useState('');

  const fetchData = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?rating=PG-13&tag=funny&api_key=${API_KEY}`);
    response.json().then((responseObj) => {
        console.log(responseObj)
      setMemeUrl(responseObj.data.image_original_url);
    })
  };

  useEffect(() => {
    fetchData();
  }, [setMemeUrl])
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>{props.appName}</h2>
        <img src={memeUrl} />
        <Button raised accent onClick={fetchData}>Refresh</Button>
      </header>
    </div>
  );
}

export default App;
