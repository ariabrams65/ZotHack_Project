import React from 'react';
import './App.css';
import Weather from "./WeatherSearch"
import DisplayWeather from "./components/climate.js"
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Weather/>
        <DisplayWeather/>
        
      </header>
    </div>
  );
}

export default App;
