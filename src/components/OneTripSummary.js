import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import './OneTripSummary.css';
import TripItems from './TripItems.js'


const OneTripSummary = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [displaytrip, setDisplayTrip] = useState({});
    const [items, setitems] = useState([]);
    const [newItemForm, setnewItemForm] = useState(
        { name: '', type: 'other', packed: false });
    const [watchitem, setwatchitem] = useState({});


    const currentId = props.selectTripId

    useEffect(() => {
        console.log("inside USEeffect")
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/trip/${currentId}`).then((response) => {
            setDisplayTrip(response.data);
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t get trip.');
        });
    }, [currentId]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/trips/${currentId}/item`).then((response) => {
            setitems(response.data);
            setLoading(false);
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t get trip.');
        });
    }, [currentId, watchitem]);

    const addItem = (event) => {
        event.preventDefault();

        console.log(currentId)
        console.log("inside item create")

        const newItem = {
            "name" : newItemForm.name,
            "type" : newItemForm.type,
            "packed" : newItemForm.packed
          }

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${currentId}/item`, newItem).then((response) => {
            console.log("item create")
            setwatchitem(newItem)
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t post new item.');
        });
        alert('Added new item!');
        // history.push('/home');
    }


    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">New Item</Popover.Header>
            <Popover.Body>

                <Form>
                    <Form.Label htmlFor='newItem'><h6>What do you need to pack?</h6></Form.Label>
                    <Form.Control
                        name='newItem'
                        placeholder='new item'
                        onChange={event => setnewItemForm({ ...newItemForm, name: event.target.value })}
                    />
                    <div className="newitem">
                    <Button onClick={(event) => addItem(event)}  type="submit">Add Your Item!</Button>
                    </div>
                </Form>
            </Popover.Body>
        </Popover>
    );

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <div className="Summarybody">
            <h4> <span className="locationheader">{displaytrip.name}</span> </h4>
            <h4> <span className="locationheader">Location:</span>{displaytrip.location} </h4>
            <Card className="packinglist">
                <h4>Packing List</h4>
                <TripItems
                    items={items}
                    setItems={setitems}
                />
                <div className="newitembuttondiv">

                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                        <div >
                        <Button className="newitembutton">Add New Item</Button>
                        </div>
                    </OverlayTrigger>

                </div>
            </Card >
        </div>
    )
};
export default OneTripSummary;