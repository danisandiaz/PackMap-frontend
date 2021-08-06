
import React, { useState } from 'react'
import axios from 'axios';


const Form = (props) => {

  const [formData, setFormData] = useState(
    { trip: '', location: '', startdate: '', enddate: '', transportation: '' }
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
    console.log(resp.data.id);


  };

  // Method causes to store all the values of the 
  // input field in react state single method handle 
  // input changes of all the input field using ES6 
  // javascript feature computed property names

  // function handleChange(event){
  //   setFormData({
  //     // Computed property names
  //     // keys of the objects are computed dynamically
  //     [event.target.name] : event.target.value
  //   })
  // }

  // Return a controlled form i.e. values of the 
  // input field not stored in DOM values are exist 
  // in react component itself as state
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
                // checked={transportation === "car"}
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
                // checked={transportation === "plane"}
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
                // checked={transportation === "bus"}
                onClick={e => setFormData({ ...formData, transportation: e.target.value })}
              />
              bus
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