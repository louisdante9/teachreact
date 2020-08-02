import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Home'
import Nav from './Nav';
import Button from './Button';


function App() {
  return (
    <Router>
    <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <Nav/>
      <h1>
        This is the About page
      </h1>
      <Button color={'green'}name={'Submit'}/>
    </div>
  )
}
function Contact() {
  return (
    <div>
      <Nav/>
      <h1>
        This is the Contact page
      </h1>
      <Button color={'red'}name={'Email me!'}/>
    </div>
  )
}

export default App;
