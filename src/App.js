import './App.css';
import React from "react";
import TripForm from './components/Form.js'
import SavedTrips from './components/SavedTrips.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router >
      <div className='grad'>
        <ul>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/savedtrips">Saved Trips</Link>
          </li>
          <li>
            <Link to="/createtrip">Create New Trip</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/savedtrips">
            <Savedtrips />
          </Route>
          <Route exact path="/createtrip">
            <CreateTrip />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


function Home() {
  return (
    <div >
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>

    </div>
  );
}

function Savedtrips() {
  return (
    <div>
      <SavedTrips />
    </div>
  );
}

function CreateTrip() {
  return (
    <div>
      <h2>Create a new Trip</h2>
      <TripForm />
    </div>
  );
}
