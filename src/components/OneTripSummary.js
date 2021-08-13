import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './OneTripSummary.css';
import TripItems from './TripItems.js'
import { Button } from 'bootstrap';


const OneTripSummary = (props) =>{
    const [isLoading, setLoading] = useState(true);
   const [displaytrip, setDisplayTrip] = useState({});
   const [items, setitems] = useState([]);

const currentId = props.selectTripId

useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/trip/${currentId}`).then((response)=>{
        setDisplayTrip(response.data);
    }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t get trip.');
    });
}, []);

useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/trips/${currentId}/item`).then((response)=>{
        setitems(response.data);
        setLoading(false);
    }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t get trip.');
    });
}, []);



console.log("both effect requests completed great!")
console.log(displaytrip)
console.log(items)

if (isLoading) {
    return <div className="App">Loading...</div>;
  }

return(
    <div className ="Summarybody">
    <h4> <span className="locationheader">Location:</span>{displaytrip.location} </h4>
    <Card className="packinglist">
        <h4>Packing List</h4>
        <TripItems 
        items={items}
        setItems={setitems}
        />
    </Card >
    </div>
)
};
export default OneTripSummary;