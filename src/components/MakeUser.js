import React, { useState } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './MakeUser.css';

import { useHistory } from "react-router-dom";

const MakeUser = (props) => {
    const [NewUserData, setNewUserData] = useState(
        { email: '', password: '', fname:'', lname:'' }
    );
    const history = useHistory();
    
    const createTraveler = (e) => {

        e.preventDefault();

        const newTraveler = {
            "name" : NewUserData.name,
            "email" : NewUserData.email,
            "fname" : NewUserData.fname,
            "lname" : NewUserData.lname,
            "password" : NewUserData.password,


        }

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/traveler`,newTraveler).then((response) => {
            console.log(response);
            console.log("inside the post user function");
            alert(`Created new Traveler ${NewUserData.name}`);
            props.setNewUserClicked(false)
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t get the user details.');

        });
        history.push('/home');
    };






    return (
        <div>
            <Container>
                <Form>
                    <div className="headernewtravler"><h4>Welcome New Traveler!   </h4></div>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={e => setNewUserData({ ...NewUserData, email: e.target.value })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Create a New Password</Form.Label>
                        <Form.Control
                            type="code"
                            placeholder="****"
                            onChange={e => setNewUserData({ ...NewUserData, password: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter you first name</Form.Label>
                        <Form.Control
                            type="First name"
                            placeholder="First name"
                            onChange={e => setNewUserData({ ...NewUserData, fname: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter you last name</Form.Label>
                        <Form.Control
                            type="Last name"
                            placeholder="Last name"
                            onChange={e => setNewUserData({ ...NewUserData, lname: e.target.value })}
                        />
                    </Form.Group>
                    <div className="holderloginbuttons">
                        <div className="loginbuttons">
                        
                            <Button onClick={(e) => createTraveler(e)}variant="outline-secondary" type="submit">
                                Create New Account
                            </Button>
        

                        </div>
                    </div>
                </Form>
            </Container>
        </div>

    )
};

export default MakeUser