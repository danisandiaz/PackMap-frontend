import axios from 'axios';

export const generateHikingItems = async (trip_id) =>{

    const daybag = {
        "name": "day bag",
        "type": "clothing",
        "packed": false
    }
    const sunscreen = {
        "name": "sunscreen",
        "type": "accessories",
        "packed": false
    }
    const hikingshoes = {
        "name": "hiking shoes",
        "type": "clothing",
        "packed": false
    }

      console.log(trip_id)
      const newitem1 =  await axios.post(`http://localhost:8080/trips/${trip_id}/item`, daybag);
      const newitem2 =  await axios.post(`http://localhost:8080/trips/${trip_id}/item`, sunscreen);
      const newitem3 =  await axios.post(`http://localhost:8080/trips/${trip_id}/item`, hikingshoes);

    };