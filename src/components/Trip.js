import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Trip.css';



const Trip = ({showtrip, tripdetails}) => {

    return (
        <div>
            
        <div flex-column className= 'tripgroupbutton'>
        <ButtonGroup>
            <Button onClick={() =>{ showtrip(tripdetails.id)}} variant="outline-secondary" className= 'tripgroupbutton' id='tripbutton'>
            <h4 > Trip Name: {tripdetails.name}</h4>
            <div><p>{tripdetails.location} {tripdetails.id}</p></div>
            </Button> 
            <Button>Delete</Button>
        </ButtonGroup>
        </div>
        </div>
    );
};

export default Trip;