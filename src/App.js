import React from 'react';
import './App.css';
import countdown from './components/countdown/timer'

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Website
          <br />
          Coming Soon
        </h1>
        <countdown />
      </div>
    </div>
  );
}

export default App;
 