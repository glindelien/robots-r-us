import React from 'react';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Robots-R-Us</h1>
      {data.map((robot) => {
        return <div>{robot.first_name}</div>;
      })}
    </div>
  );
}

export default App;
