import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Trip from './Trip.js'


const SavedTrips = (props) => {
    const [TripsData, setTripsData] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:9090/trips`).then((response)=>{
        setTripsData(response.data);
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t get trips.');
        });
    }, []);

    const tripElements = TripsData.map((tripdetails, index) => {
        return (
            <Trip
                {...tripdetails}
            />
        )
    });


    return (
        <div ClassName='savedtrips'>
            <h2>Saved Trips</h2>
            {tripElements}
        </div>
    );
};


export default SavedTrips;