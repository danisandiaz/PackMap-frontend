import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Trip.css';



const Trip = ({showtrip, tripdetails, deleteTrip}) => {

    return (
        <div className= "triplocation">
            
        <div flex-column className= 'tripgroupbutton'>
        <ButtonGroup>
            <Button onClick={() => showtrip(tripdetails.id)} variant="outline-secondary" className= 'tripgroupbutton' id='tripbutton'>
            <div className="tripname"><h5>Trip Name: </h5> <h4 > {tripdetails.name}</h4></div>
            <div><p>{tripdetails.location}</p></div>
            <div>{tripdetails.startdate} - {tripdetails.enddate}</div>
            </Button> 
            <Button
            onClick={() => {deleteTrip(tripdetails)}} 
            >Delete</Button>
        </ButtonGroup>
        </div>
        </div>
    );
};

export default Trip;