import React, { Component, useState } from 'react';
import logo from './daniel.png';
import './App.css';
import nojanpic from './nojan.jpeg'
import joepic from './joe.jpeg'
import russellpic from './russell.jpeg'
import tommypic from './tommy.jpeg'
import all from './all.jpeg'
import merch from './merch.jpg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Buy now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body>GET PWND NOOB</Modal.Body>
      </Modal>
    </>
  );
}

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
    <h3>The Stud</h3>
    <img className="pics" src={russellpic}/>
  </div>
)

const tommy = () => (
  <div>
    <h3>The Muscles</h3>
    <img className="pics" src={tommypic}/>
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
    <Example />
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
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
