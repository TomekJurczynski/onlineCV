import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="bg-particle">
        <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 140
                  },
                  "size": {
                      "value": 3
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  }
              }
          }} />
      </div>
      <div className="content">
          <div className="display-block">
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </Router>
          </div>
          <div className="menu-block">
            Hello
          </div>
      </div>
    </div>
  );
}

export default App;
