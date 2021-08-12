import './App.css';
import React, { useState, useEffect } from "react";
import TripForm from './components/Form.js'
import SavedTrips from './components/SavedTrips.js'
import OneTripSummary from './components/OneTripSummary.js'
import {Navbar, Nav} from 'react-bootstrap'

import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'


export default function App() {
  const [SelectedTripId, setSelectedTripId] = useState(189);

  return (
    <div className="grad">
    <Router >
      <Navbar bg="light" expand="lg">
   
            <LinkContainer to="/"><Navbar.Brand>Home</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">

            <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer>

            <LinkContainer to="/savedtrips"><Nav.Link>Saved Trips</Nav.Link></LinkContainer>

            <LinkContainer to="/createtrip"><Nav.Link>Create New Trip</Nav.Link></LinkContainer>
            </Nav>
            </Navbar.Collapse>
      </Navbar>


      {/* // <div className="grad">
      //   <ul>
      //     <li >
      //       <Link to="/">Home</Link>
      //     </li>
      //     <li>
      //       <Link to="/about">About</Link>
      //     </li>
      //     <li>
      //       <Link to="/savedtrips">Saved Trips</Link>
      //     </li>
      //     <li>
      //       <Link to="/createtrip">Create New Trip</Link>
      //     </li>
      //   </ul> */}

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/savedtrips">
            <SavedTrips
              selectTrip={setSelectedTripId}
            />
          </Route>
          <Route exact path="/createtrip">
            <CreateTrip />
          </Route>
          <Route path="/onetrip">
            <OneTrip
              SelectedTripId={SelectedTripId}
            />
          </Route>

        </Switch>
    </Router>
    </div>
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

function CreateTrip() {
  return (
    <div>
      <h2>Create a new Trip</h2>
      <TripForm />
    </div>
  );
};

const OneTrip = (props) => {

  console.log("inside onetrip function")

  return (
    <div>
      <h2>Trip Summary</h2>
      <OneTripSummary selectTripId = {props.SelectedTripId}
      
      />

    </div>
  );
};
