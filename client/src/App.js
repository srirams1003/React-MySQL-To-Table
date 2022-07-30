import logo from './logo.svg';
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import ReactJson from 'react-json-view';

function App() {

  const [data, setData] = useState(null);

  async function apiCall(){
    let response = await fetch('/api/asset/2');
    response = await response.json();
    console.log(response);
    // setData(response[0].typeName);
    setData(response);
  }

  useEffect(function () {
    apiCall()
      .catch((err)=>{
        console.log("An Error Occurred:", err);
      });
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      
      <div>
        <div>{!data ? "Loading..." : <ReactJson src={data} theme="monokai" /> }</div>
      </div>
    </div>
  );

}

export default App;
