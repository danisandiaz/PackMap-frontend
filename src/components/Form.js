
import React, { useState } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { generateSwimmingItems } from '../utils/swimmingitems.js';
import { generateHikingItems } from '../utils/hikingitems.js';
import { generateSightseeingItems } from '../utils/sightseeingitems.js';
import { generateCampingItems } from '../utils/campingitems.js';
import { generateFormalItems } from '../utils/formalevent.js';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory } from "react-router-dom";
import './Form.css';



const temp = {
  "name" : "2021-11-11",
  "location" : "2021-11-11",
  "startdate" : "2021-11-11",
  "enddate" : "2021-11-11",
  "transportation" : "2021-11-11"
}


const TripForm = (props) => {

  const [formData, setFormData] = useState(
    { trip: '', location: '', startdate: '', enddate: '', transportation: '' }
  );
  const [items, setItems] = useState(
    { swimming: false , hiking: false , sightseeing: false, formalevent: false, camping:false }
  );
  const history = useHistory();


  function handleSubmit() {
    createNewTrip();
  }

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

    console.log(temp)
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

    history.push("/");
  };

  return (
    <>
    <Container className= 'formcontainer'>
      <Form>
        <Form.Group>
        <Form.Label htmlFor='trip'>Name Your Trip :</Form.Label>
        <Form.Control
          name='trip'
          placeholder='trip'
          onChange={e => setFormData({ ...formData, trip: e.target.value })}
        />
        </Form.Group>
      <div>
        <Form.Label htmlFor='location'>Where are you going?</Form.Label>
        <Form.Control
          name='location'
          placeholder='location'
          onChange={e => setFormData({ ...formData, location: e.target.value })}
        />
      </div>
      <div>
        <Form.Label htmlFor='startdate'>Start Date</Form.Label>
        <Form.Control
          name='startdate'
          placeholder='yyyy-mm-dd'
          onChange={e => setFormData({ ...formData, startdate: e.target.value })}
        />
      </div>
      <div>
        <Form.Label htmlFor='enddate'>End Date</Form.Label>
        <Form.Control
          name='enddate'
          placeholder='yyyy-mm-dd'
          onChange={e => setFormData({ ...formData, enddate: e.target.value })}
        />
      </div>
      <br/>
      <Form.Group >
        <Form.Label htmlFor='transportation'>Transportation</Form.Label>
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
        <label htmlFor='Trip Activities'>Trip Activities</label>
        <br/>
              <div>
              <Form.Check
                inline
                type="checkbox"
                name="swimming"
                value = {true}
                label = "swimming"
                onClick={e => {setItems({ ...items, swimming: e.target.value })}}
              />
              </div>
              <div>
              <Form.Check
                inline
                type="checkbox"
                name="hiking"
                value={true}
                label = "hiking"
                onClick={e => setItems({ ...items, hiking: e.target.value })}
              />
              </div>
              <div>
              <Form.Check
                inline              
                type="checkbox"
                name="sightseeing"
                value={true}
                label = "sightseeing"
                onClick={e => setItems({ ...items, sightseeing: e.target.value })}
              />
              </div>
              <div>
              <Form.Check
                inline
                type="checkbox"
                name="formalevent"
                value= {true}
                label = "formalevent"
                onClick={e => setItems({ ...items, formalevent: e.target.value })}
              />
              </div>
              <div>
              <Form.Check
                inline
                type="checkbox"
                name="camping"
                value= {true}
                label = "camping"
                onClick={e => setItems({ ...items, camping: e.target.value })}
              />
              </div>

      </div>
      <div className='submitbuttondiv'>
        <button  className='submitbutton' onClick={(event) => createNewTrip(event)} type="submit">Create Your Trip!</button>
      </div>
      </Form.Group>
      </Form>
    </Container>
    </>
  )
}


export default TripForm