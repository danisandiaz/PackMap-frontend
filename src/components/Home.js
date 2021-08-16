import React, { useState, useEffect } from 'react'
import ProfilePage from './ProfilePage.js'
import Login from './Login.js'



const Home = ({ TravelerId, setTravelerId }) => {
  console.log(TravelerId)

    if (TravelerId > 0) {
      return <div><ProfilePage/></div>
    }
  
  
    return (
      <div className="page-height">
        <Login
         TravelerId ={TravelerId}
         setTravelerId= {setTravelerId}
        />
      </div>
    );
  };

  export default Home;