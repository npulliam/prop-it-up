import './App.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import Number from './views/Number';
import WordStyles from './views/WordStyles';
import React from 'react';


function App() {
  return(
    <div className="container">
       <Router>
            <Home path="/home"/>
            <Number path="/:num"/>
            <WordStyles path="/:word/:color/:background"/>
        </Router>
    </div>
  )
}
export default App;
