
import React, { useState } from 'react'
import axios from 'axios';
import { generateSwimmingItems } from '../utils/swimmingitems.js';
import { generateHikingItems } from '../utils/hikingitems.js';
import { generateSightseeingItems } from '../utils/sightseeingitems.js';
import { generateCampingItems } from '../utils/campingitems.js';
import { generateFormalItems } from '../utils/formalevent.js';



const Form = (props) => {

  const [formData, setFormData] = useState(
    { trip: '', location: '', startdate: '', enddate: '', transportation: '' }
  );
  const [items, setItems] = useState(
    { swimming: false, hiking: false , sightseeing: false, formalevent: false, camping:false }
  );

  function handleSubmit() {
    createNewTrip();
  }

  const createNewTrip = async () => {

      const newTrip = {
      "name" : formData.trip,
      "location" : formData.location,
      "startdate" : formData.startdate,
      "enddate" : formData.enddate,
      "transportation" : formData.transportation
    }

    console.log(newTrip)
    const resp =  await axios.post(`http://localhost:9090/trips`, newTrip);
    const newtripid = resp.data.id
    console.log(items);

    if (items.swimming == "true"){
    generateSwimmingItems(newtripid)}
    if (items.hiking == "true"){
    generateHikingItems(newtripid)}
    if (items.sightseeing == "true"){
    generateSightseeingItems(newtripid)}
    if (items.formalevent == "true"){
    generateFormalItems(newtripid)}
    if (items.camping == "true"){
    generateCampingItems(newtripid)}

    console.log("done!")

  };

  return (
    <>
      <div>
        <label htmlFor='trip'>Name Your Trip :</label>
        <input
          name='trip'
          placeholder='trip'
          onChange={e => setFormData({ ...formData, trip: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='location'>Where are you going?</label>
        <input
          name='location'
          placeholder='location'
          onChange={e => setFormData({ ...formData, location: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='startdate'>Start Date</label>
        <input
          name='startdate'
          placeholder='yyyy-mm-dd'
          onChange={e => setFormData({ ...formData, startdate: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='enddate'>End Date</label>
        <input
          name='enddate'
          placeholder='yyyy-mm-dd'
          onChange={e => setFormData({ ...formData, enddate: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor='transportation'>Transportation</label>
        <ul>
          <li>
            <label>
              <input
                type="radio"
                name="transportation"
                value="car"
                onChange={e => setFormData({ ...formData, transportation: e.target.value })}
              />
              car
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="transportation"
                value="plane"
                onChange={e => setFormData({ ...formData, transportation: e.target.value })}
              />
              plane
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                name="transportation"
                value="bus"
                onChange={e => setFormData({ ...formData, transportation: e.target.value })}
              />
              bus
            </label>
          </li>
          </ul>
      </div>

      <div>
        <label htmlFor='Trip Activities'>Trip Activities</label>
        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                name="swimming"
                value = {true}
                onClick={e => {setItems({ ...items, swimming: e.target.value })}}
              />
              swimming
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="hiking"
                value={true}
                onClick={e => setItems({ ...items, hiking: e.target.value })}
              />
              hiking
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="sightseeing"
                value={true}
                onClick={e => setItems({ ...items, sightseeing: e.target.value })}
              />
              sightseeing
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="formalevent"
                value= {true}
                onClick={e => setItems({ ...items, formalevent: e.target.value })}
              />
              formalevent
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="camping"
                value= {true}
                onClick={e => setItems({ ...items, camping: e.target.value })}
              />
              camping
            </label>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={() => handleSubmit()}>Next</button>
      </div>
    </>
  )
}


export default Form