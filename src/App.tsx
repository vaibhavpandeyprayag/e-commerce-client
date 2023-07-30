import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    // Function to make the API call
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/data"); // Replace "/api/data" with your actual API endpoint
        const data = await response.json();
        console.log(data); // Handle the data received from the server
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch the data
  }, []); // Empty dependency array to run the effect only once
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
