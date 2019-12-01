import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home.js';
import SiganSim from './sigan_sim.js';
import ThreeSixtyOne from './three_sixty_one.js';

function App() {
  return (
    <Router>
      <div>
        <nav style={{display: "none"}}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sigansim">시간표 시뮬레이터</Link>
            </li>
            <li>
              <Link to="/three-sixty-one">361</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sigansim">
            <SiganSim />
          </Route>
          <Route path="/users">
            <ThreeSixtyOne />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
