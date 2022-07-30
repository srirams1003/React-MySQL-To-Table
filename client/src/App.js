import logo from './logo.svg';
import React, { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  async function apiCall(){
    let response = await fetch('/api/getAllTypes');
    response = await response.json();
    console.log(response);
    setData(response[0].typeName);
  }

  useEffect(function () {
    apiCall()
      .catch((err)=>{
        console.log("An Error Occurred:", err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );

}

export default App;
