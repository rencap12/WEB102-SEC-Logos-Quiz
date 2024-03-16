// App.jsx
import React, { useState } from 'react';
import './App.css';
import  Cards from './components/cards.jsx'

function App() {
  const [masteryLevel, setMasteryLevel] = useState(0);

  const giveLevel = () => {
    setMasteryLevel(masteryLevel + 1);
  }

  return (
    <div className="container">
      <h1 className="title">SEC School Logo Quiz</h1>
      <h2>How well do you know these logos?</h2>
      <h2>Number of cards: 14</h2>
      <Cards /> {/* Pass updateMasteryLevel */}
    </div>
  );
}

export default App;
