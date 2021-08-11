import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Trip from './Trip.js'
import OneTripSummary from './OneTripSummary.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

  
export default function SavedTrips() {
    const [TripsData, setTripsData] = useState([]);
    const [SelectedTripId, setSelectedTripId] = useState();
    const history = useHistory();


    useEffect(() => {
        axios.get(`http://localhost:8080/trips`).then((response)=>{
        setTripsData(response.data);
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t get trips.');
        });
    }, []);

    const showtrip = (id) => {
        console.log("hello inside showtrip meow")
        setSelectedTripId(id)
        console.log(id)
        history.push('/onetrip');

            };

    const tripElements = TripsData.map((tripdetails) => {
        return (
            <Trip
                showtrip = {showtrip}
                tripdetails ={tripdetails}
                
            />
        )
    });




    return (
      <Router >
        <div className='grad'>
            <div ClassName='savedtrips'>
            <h2>Saved Trips</h2>
            {tripElements}
        </div>

          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route path="/alltrips">
              <SavedTrips />
            </Route>
            <Route exact path="/onetrip">
              <OneTrip />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
  
  function OneTrip() {
    return (
      <div>
        <h2>One trip</h2>
        <p>hello</p>
  
      </div>
    );
  };



