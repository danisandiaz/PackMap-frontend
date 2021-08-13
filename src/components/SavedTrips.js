import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Trip from './Trip.js'
import './SavedTrip.css';

import OneTripSummary from './OneTripSummary.js'
import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";

  

export default function SavedTrips({selectTrip}) {
    const [TripsData, setTripsData] = useState([]);
    const history = useHistory();


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/trips`).then((response)=>{
        setTripsData(response.data);
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t get trips.');
        });
    }, []);

    const showtrip = (id)=> {
        console.log("hello inside showtrip now");
        console.log(id);
        selectTrip(id);
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
        <div className="page-height">
            <div >
            <h2>Saved Trips</h2>
            {tripElements}
        </div>
        </div>
    );
  };
  
  




