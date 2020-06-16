import React from 'react';
import './../App.css';
import Navb from './Navb';
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

import {BrowserRouter, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navb />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experience} />
            <Route path="/contact" component={Contact} />
          </Switch>
      </div>

    </BrowserRouter>
    
  );
}

export default App;
