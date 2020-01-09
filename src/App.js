import React, { Component } from 'react';
import logo from './daniel.png';
import './App.css';
import nojanpic from './nojan.jpeg'
import joepic from './joe.jpeg'
import russellpic from './russell.jpg'
import tommypic from './tommy.jpeg'
import all from './all.jpeg'
import merch from './merch.jpg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';
import ReactGA from 'react-ga';

const trackingId = "UA-155940168-1";
ReactGA.initialize(trackingId);
ReactGA.pageview('/');
ReactGA.pageview('/nojan');
ReactGA.pageview('/joe');
ReactGA.pageview('/russell');
ReactGA.pageview('/tommy');
ReactGA.pageview('/support');
ReactGA.pageview('/merch');

const home = () => (
  <div>
    <h3>Welcome to the Internet!</h3>
    <img className="pics" src={all}/>
  </div>
)

const nojan = () => (
  <div>
    <h3>The Brains</h3>
    <img className="pics" src={nojanpic}/>
  </div>
)

const joe = () => (
  <div>
    <h3>The Beast</h3>
    <img className="pics" src={joepic}/>
  </div>
)

const russell = () => (
  <div>
    <h3>The Dreamer</h3>
    <img className="pics" src={russellpic}/>
  </div>
)

const tommy = () => (
  <div>
    <h3>The Muscles</h3>
    <img className="pics" src={tommypic}/>
  </div>
)

const merchpage = () => (
  <div>
    <h1> Out of stock due to unanticipated demand </h1>
  </div>
)

const support = () => (
  <div>
    <p/>
    <h3> Become a NoJoRuToad </h3>
    <a variant="primary" size="lg" href="https://www.instagram.com/nojoruto">
      Follow us!
    </a>
    <h3> Buy our merch </h3>
    <img className="pics" src={merch}/>
    <p/>
    <Link to="/merch">
      <button>Buy Now</button>
    </Link>
    <h3 className="secret"> Noob </h3>
    <h3> Give us money</h3>
    <p> Venmo: Nojan-Sheybani </p>
  </div>
)

const MainMenu = () => {
return (
<div>
  <Link to="/">
    <button>Home</button>
  </Link>
  <Link to="/nojan">
    <button>Nojan</button>
  </Link>
  <Link to="/joe">
    <button>Joe</button>
  </Link>
  <Link to="/russell">
    <button>Russell</button>
  </Link>
  <Link to="/tommy">
    <button>Tommy</button>
  </Link>
  <Link to="/support">
    <button>Support us!</button>
  </Link>
</div>
);
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">NoJoRuTo</h1>
            <MainMenu />
          </header>
          <div>
            <Route exact path="/" component={home} />
            <Route exact path="/nojan" component={nojan} />
            <Route exact path="/joe" component={joe} />
            <Route exact path="/russell" component={russell} />
            <Route exact path="/tommy" component={tommy} />
            <Route exact path="/support" component={support} />
            <Route exact path="/merch" component={merchpage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
