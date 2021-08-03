import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/jordan-barbo-bb2473a8/" target="_blank" rel="noreferrer">
          Jordan Barbo
          </a>
          {" "}and is open-sourced on{" "} 
          <a href="https://github.com/jordanbarbo/react-wx-app" target="_blank" rel="noreferrer">
          GitHub{" "}
          </a>
          and hosted on{" "}
          <a href="https://angry-brattain-0e5d84.netlify.app" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
