import './Login.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import MakeUser from './MakeUser.js'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    useHistory
} from "react-router-dom";


const Login = ({ TravelerId, setTravelerId }) => {
    const [userData, setuserData] = useState(
        { email: '', password: '' }
    );
    const [NewUserClicked, setNewUserClicked] = useState(false)

    const history = useHistory();


    const logUserIn = (e) => {
        console.log("debugging")

        e.preventDefault();
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/traveler/${userData.email}`).then((response) => {
            console.log("inside the axios function")
            console.log(response)


            console.log("inside the get user function")

            if (userData.password == response.data.password) {
                console.log("they match!")
                setTravelerId(response.data.id)
            }
            else {
                alert('Couldn\'t get that user matching that password!');
            }
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t get the user details.');

        });
        console.log(TravelerId)
        history.push('/savedtrips');
    };

    const makeuser = (e) => {
        console.log("switching the page soon makeuser")
        setNewUserClicked(true)
    }



    if (NewUserClicked == true) {
        return (
            <div>
                <MakeUser
                setNewUserClicked = {setNewUserClicked}
                />
            </div>
        );
    }
    if (NewUserClicked == false){
    return (
        <div className="login">
            <Container>
                <Form>
                    <div className="headerlogin"><h4>Login</h4></div>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={e => setuserData({ ...userData, email: e.target.value })}

                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={e => setuserData({ ...userData, password: e.target.value })}
                        />
                    </Form.Group>
                    <div className="holderloginbuttons">
                        <div className="loginbuttons">
                            <Button onClick={(e) => logUserIn(e)} variant="primary" type="submit">
                                Submit
                            </Button>
                            <div className="break"> </div>
                            <Button onClick={(e) => makeuser(e)} variant="outline-secondary" type="submit">
                                Create New Account
                            </Button>
                           
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    )}
};
export default Login;