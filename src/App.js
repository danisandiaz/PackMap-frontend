import './App.css';
import React, { useState, useEffect } from "react";
import SavedTrips from './components/SavedTrips.js'
import OneTripSummary from './components/OneTripSummary.js'
import CreateTrip from './components/CreateTrip.js'
import MakeUser from './components/MakeUser.js'
import Home from './components/Home.js'

import {Navbar, Nav} from 'react-bootstrap'
import logo from './PackMap.png';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'


export default function App() {
  const [SelectedTripId, setSelectedTripId] = useState(189);
  const [TravelerId, setTravelerId] = useState(0);


  return (
    <div className={"grad"} >
    <Router >
      <Navbar bg="light" expand="lg" className={"App-header"}>
   
            <LinkContainer to="/"><img src={logo} alt="Logo" className={"logoimage"}/></LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">

            {/* <LinkContainer to="/about"><Nav.Link>About</Nav.Link></LinkContainer> */}

            <LinkContainer to="/savedtrips"><Nav.Link>Saved Trips</Nav.Link></LinkContainer>

            <LinkContainer to="/createtrip"><Nav.Link>Create New Trip</Nav.Link></LinkContainer>
            </Nav>
            
            </Navbar.Collapse>
            
      </Navbar>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home 
            TravelerId ={TravelerId}
            setTravelerId= {setTravelerId}
            />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/savedtrips">
            <SavedTrips
              selectTrip={setSelectedTripId}
              TravelerId={TravelerId}
            />
          </Route>
          <Route exact path="/createtrip">
            <CreateTrip 
            TravelerId={TravelerId}
            />
          </Route>
          <Route path="/onetrip">
            <OneTrip
              SelectedTripId={SelectedTripId}
            />
          </Route>
          <Route path="/createnewuser">
            <MakeUser
              // SelectedTripId={SelectedTripId}
            />
          </Route>


        </Switch>
    </Router>
    </div>
  );
}


function About() {
  return (
    <div className="page-height">
      <h2>About</h2>

    </div>
  );
}


const OneTrip = (props) => {

  console.log("inside onetrip function")

  return (
    <div>
      <h2>Trip Summary</h2>
      <OneTripSummary 
      selectTripId = {props.SelectedTripId}
      TravelerId ={props.TravelerId}
      />

    </div>
  );
};
