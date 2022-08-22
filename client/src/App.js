import logo from './logo.svg';
import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import ReactJson from 'react-json-view';
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyDqG4DEYjEu_W_pGk_o844Jdav4hEiMOPY",
//     authDomain: "cloudstoretest-7f7de.firebaseapp.com",
//     projectId: "cloudstoretest-7f7de",
//     storageBucket: "cloudstoretest-7f7de.appspot.com",
//     messagingSenderId: "350697386944",
//     appId: "1:350697386944:web:961be4618956e1055cce25",
//     measurementId: "G-G88NRDSKME"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA9xfy2Z0AnJT5_OtOiYEoIVtvWw_DC-QQ",
  authDomain: "fb-test-360202.firebaseapp.com",
  projectId: "fb-test-360202",
  storageBucket: "fb-test-bucket-hap",
  messagingSenderId: "1085750363388",
  appId: "1:1085750363388:web:ec51999982c1bf22d98379"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
console.log("STORAGE:", storage);
getDownloadURL(ref(storage, 'cstore.txt'))
  .then(async (url) => {
    console.log(url);

    let body_obj = {
      url: url
    };

    let params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body_obj)
    };

    let response = await fetch('/sendCorsRequest', params);
    response = await response.json();
    console.log(response);
  })
  .catch((error) => {
    // Handle any errors
    console.log(error);
  });



function App() {

  const [data, setData] = useState(null);

  async function apiCall(){
    // let response = await fetch('/api/asset/2');
    let response = await fetch('/api/allEmployees');
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
      
      {/* <div>
        <div>{!data ? "Loading..." : <ReactJson src={data} theme="monokai" /> }</div>
      </div> */}

      <table>
        <tbody>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Joined Date</th>
            <th>Location</th>
            <th>Department</th>
            <th>Employment Type</th>
            <th>Title</th>
            <th>Work Email</th>
            <th>Personal Email</th>
            <th>Manager Work Email</th>
            <th>Personal Number</th>
          </tr>
          {!data ? "Loading..." : data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val["Employee Id"]}</td>
                <td>{val["First Name"]}</td>
                <td>{val["Middle Name"]}</td>
                <td>{val["Last Name"]}</td>
                <td>{val["Gender"]}</td>
                <td>{val["Date of Birth"]}</td>
                <td>{val["Joined Date"]}</td>
                <td>{val["Location"]}</td>
                <td>{val["Department"]}</td>
                <td>{val["Employment Type"]}</td>
                <td>{val["Title"]}</td>
                <td>{val["Work Email"]}</td>
                <td>{val["Personal Email"]}</td>
                <td>{val["Manager Work Email"]}</td>
                <td>{val["Personal Number"]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>


    </div>
  );

}

export default App;
