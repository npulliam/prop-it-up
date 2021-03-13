import './App.css';
import BoxGenerator from './components/BoxGeneratorForm';
import BoxDisplay from './components/BoxDisplay';
import React, { useState } from 'react';


function App() {
  const [boxes, setBoxes] = useState([]);
  
  const addBox = ( newBox ) => {
    setBoxes([...boxes, newBox]);
  }

  return (
    <div className="App">
      <BoxGenerator onNewBox={ addBox }/>
      <BoxDisplay boxes={ boxes }/>
    </div>
  );
}

export default App;
