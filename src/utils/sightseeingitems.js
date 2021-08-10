import axios from 'axios';

export const generateSightseeingItems = async (trip_id) =>{

    const camera = {
        "name": "camera",
        "type": "accessories",
        "packed": false
    }
    const sneakers = {
        "name": "sneakers",
        "type": "clothing",
        "packed": false
    }

      console.log(trip_id)
      const newitem1 =  await axios.post(`http://localhost:8080/trips/${trip_id}/item`, sneakers);
      const newitem2 =  await axios.post(`http://localhost:8080/trips/${trip_id}/item`, camera);
    };