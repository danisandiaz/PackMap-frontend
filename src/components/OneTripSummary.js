import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './OneTripSummary.css';

const OneTripSummary = (props) =>{
   const [displaytrip, setDisplayTrip] = useState({});

const currentId = props.selectTripId

useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/trip/${currentId}`).then((response)=>{
        setDisplayTrip(response.data);
    }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t get trip.');
    });
}, []);

console.log(displaytrip)

return(
    <div className ="Summarybody">
    <h4> Location:{displaytrip.location} </h4>
    <div>
        inside OneTripSummary
    </div>
    </div>
)

};
export default OneTripSummary;