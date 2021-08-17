import React from 'react'
import TripForm from './Form.js'



function CreateTrip({TravelerId}) {
  console.log(TravelerId)
  console.log("inside createtrip")



    return (
      <div className= "createtrip">
        <h2>Create a new Trip</h2>
        <TripForm 
        TravelerId = {TravelerId}
        />
      </div>
    );
  };
  export default CreateTrip;