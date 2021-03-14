import './App.css';
import Tabs from './components/Tabs';
import React, { useState } from 'react';


function App() {
  const [boxes, setBoxes] = useState([]);
  const tabsProps = {
    tabs: [{label: "Tab 1", content: "This is tab 1 content"}, {label: "Tab 2", content: "This is tab 2 content"}, {label: "Tab 3", content: "This is tab 3 content"}]
  }
  
  const addBox = ( newBox ) => {
    setBoxes([...boxes, newBox]);
  }

  return (
    <div className="App">
      <Tabs tabs={tabsProps.tabs}/>
    </div>
    
  );
}

export default App;
