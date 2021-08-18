import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';

import axios from 'axios';
import './ProfilePage.css';
import suitcase from '../suitcase.jpeg';


import Container from 'react-bootstrap/Container';


const ProfilePage = ({ TravelerId, setTravelerId }) => {
    const [UserData, setUserData] = useState({});

    const logout = () => {
        setTravelerId(0);
        alert('You\'re logged out!');
    }


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/traveler/userprofile/${TravelerId}`).then((response) => {
            setUserData(response.data);
            console.log("welcome to the homepage");
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t get this user information!');
        });
    }, [UserData]);


    return (

        <div className="page-height profilepage">
            <Container>
                <div className="profilepage">
                    <div className="welcomemessage">
                        <h3>Hello! Welcome to PackMap {UserData.fname} {UserData.lname}!</h3>
                    </div>
                    <img src={suitcase} alt="Suitcase" className="suitcaseimg" />
                    <div className="logoutbutton">
                        <Button onClick={() => logout()} type="submit">Log Out!</Button>
                    </div>

                </div>

            </Container>
        </div>

    )
};
export default ProfilePage;

