import logo from './logo.svg';
import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import ReactJson from 'react-json-view';


function App() {

    const [data, setData] = useState(null);

    async function apiCall() {
        let response = await fetch('/api/allEmployees');
        response = await response.json();
        console.log(response);
        setData(response);
    }

    useEffect(function () {
        apiCall()
            .catch((err) => {
                console.log("An Error Occurred:", err);
            });
    }, []);

    return (
        <div className="App">

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
