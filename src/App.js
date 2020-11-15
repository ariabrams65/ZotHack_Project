import React from 'react';
import './App.css';
import Weather from "./WeatherSearch"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='title'>Weather App</h2>
        <Weather/>
        
      </header>
    </div>
  );
}

export default App;
