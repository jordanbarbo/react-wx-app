import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Weather App</h2>
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/jordan-barbo-bb2473a8/" target="_blank">
          Jordan Barbo
          </a>
          {" "}and is open-sourced on GitHub
        </footer>
      </div>
    </div>
  );
}

export default App;
