import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-mdl';

const App = (props) => {
  const [memeUrl, setMemeUrl] = useState('');

  const fetchData = async () => {
    const response = await fetch(   "https://media1.giphy.com/media/qaaSZMnWkufRu/200.webp?cid=790b7611b4b541fff75014c864546653ef73507d0ca8a49f&rid=200.webp",);
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
