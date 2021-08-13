
import React, { useState } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { generateSwimmingItems } from '../utils/swimmingitems.js';
import { generateHikingItems } from '../utils/hikingitems.js';
import { generateSightseeingItems } from '../utils/sightseeingitems.js';
import { generateCampingItems } from '../utils/campingitems.js';
import { generateFormalItems } from '../utils/formalevent.js';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import './Form.css';



const TripForm = (props) => {

  const [formData, setFormData] = useState(
    { trip: '', location: '', startdate: '', enddate: '', transportation: '' }
  );
  const [items, setItems] = useState(
    { swimming: false , hiking: false , sightseeing: false, formalevent: false, camping:false }
  );
  const history = useHistory();


  const createNewTrip = (event) => {
    event.preventDefault();
    const newTrip = {
      "name" : formData.trip,
      "location" : formData.location,
      "startdate" : formData.startdate,
      "enddate" : formData.enddate,
      "transportation" : formData.transportation
    }
    console.log(items);
    console.log(newTrip);

    axios.post(`http://localhost:8080/trips`, newTrip
    ).then((response) =>{
    // console.log(newtripid)
    const newtripid = response.data.id
    console.log(newtripid)

    console.log(items)

    if (items.swimming === "true"){
    generateSwimmingItems(newtripid)}
    if (items.hiking === "true"){
    generateHikingItems(newtripid)}
    if (items.sightseeing === "true"){
    generateSightseeingItems(newtripid)}
    if (items.formalevent === "true"){
    generateFormalItems(newtripid)}
    if (items.camping === "true"){
    generateCampingItems(newtripid)}

    console.log("done!");
    });

    history.push('/savedtrips');
  };

  return (
    <>
    <Container className= 'formcontainer'>
      <Form>
        <Form.Group>
        <Form.Label htmlFor='trip'><h6>Name Your Trip :</h6></Form.Label>
        <Form.Control
          name='trip'
          placeholder='trip'
          onChange={e => setFormData({ ...formData, trip: e.target.value })}
        />
        </Form.Group>
      <div>
        <Form.Label htmlFor='location'><h6>Where are you going?</h6></Form.Label>
        <Form.Control
          name='location'
          placeholder='location'
          onChange={e => setFormData({ ...formData, location: e.target.value })}
        />
      </div>
      <div>
        <Form.Label htmlFor='startdate'><h6>Start Date</h6></Form.Label>
        <Form.Control
          name='startdate'
          placeholder='yyyy-mm-dd'
          onChange={e => setFormData({ ...formData, startdate: e.target.value })}
        />
      </div>
      <div>
        <Form.Label htmlFor='enddate'><h6>End Date</h6></Form.Label>
        <Form.Control
          name='enddate'
          placeholder='yyyy-mm-dd'
          onChange={e => setFormData({ ...formData, enddate: e.target.value })}
        />
      </div>
      <br/>
      <Form.Group >
        <Form.Label htmlFor='transportation'><h5>Transportation</h5></Form.Label>
        <br/>
              <Form.Check
                inline
                label = "car"
                type="radio"
                name="transportation"
                value="car"
                onChange={e => setFormData({ ...formData, transportation: e.target.value })}
              />
              <Form.Check
                inline
                label = "plane"
                type="radio"
                name="transportation"
                value="plane"
                onChange={e => setFormData({ ...formData, transportation: e.target.value })}
              />
              <Form.Check
                inline
                label = "bus"
                type="radio"
                name="transportation"
                value="bus"
                onChange={e => setFormData({ ...formData, transportation: e.target.value })}
              />
      </Form.Group>
     
      <br/>
      <Form.Group>
      <div > 
        <label htmlFor='Trip Activities'><h5>Trip Activities</h5></label>
        <br/>
              <div>
              <Form.Check
                inline
                type="checkbox"
                name="swimming"
                value = {items.swimming}
                label = "swimming"
                onClick={e => {setItems({ ...items, swimming: !items.swimming})}}
              />
              </div>
              <div>
              <Form.Check
                inline
                type="checkbox"
                name="hiking"
                value={items.hiking}
                label = "hiking"
                onClick={(e) => {
               
                  setItems({ ...items, hiking: !items.hiking})}}
              />
              </div>
              <div>
              <Form.Check
                inline              
                type="checkbox"
                name="sightseeing"
                value={items.sightseeing}
                label = "sightseeing"
                onClick={e => setItems({ ...items, sightseeing: !items.sightseeing })}
              />
              </div>
              <div>
              <Form.Check
                inline
                type="checkbox"
                name="formalevent"
                value= {items.formalevent}
                label = "formalevent"
                onClick={e => setItems({ ...items, formalevent: !items.formalevent })}
              />
              </div>
              <div>
              <Form.Check
                inline
                type="checkbox"
                name="camping"
                value= {items.camping}
                label = "camping"
                onClick={e => setItems({ ...items, camping: !items.camping })}
              />
              </div>

      </div>
      <div className='submitbuttondiv'>
        <Button  className='submitbutton' onClick={(event) => createNewTrip(event)} type="submit">Create Your Trip!</Button>
      </div>
      </Form.Group>
      </Form>
    </Container>
    </>
  )
}


export default TripForm