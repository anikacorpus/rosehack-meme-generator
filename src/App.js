import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  const [memeUrl, setMemeUrl] = useState('');

  const fetchData = async () => {
    const response = await fetch("https://api.giphy.com/v1/gifs/random?rating=PG-13&tag=funny&api_key=kdGBXeHVs1fOu0W6YmBtQxvlO6tsYzBs");
    response.json().then((responseObj) => {
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
        <button onClick={fetchData}>Refresh</button>
      </header>
    </div>
  );
}

export default App;
