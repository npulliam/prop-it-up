import './App.css';
import { Router } from '@reach/router';
import Home from './views/Home';
import Number from './views/Number';
import WordStyles from './views/WordStyles';
import ApiWalker from "./views/ApiWalker";
import PeopleDisplay from "./views/PeopleDisplay";
import PlanetDisplay from "./views/PlanetDisplay";
import React from 'react';



function App() {
  return(
    <div className="container">
       <Router>
            <ApiWalker path="/"/>
            <PeopleDisplay path="/people/:num"/>
            <PlanetDisplay path="/planets/:num"/>
            {/* <Home path="/home"/>
            <Number path="/:num"/>
            <WordStyles path="/:word/:color/:background"/> */}
        </Router>
    </div>
  )
}
export default App;
