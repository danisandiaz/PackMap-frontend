import axios from 'axios';

export const generateSwimmingItems = async (trip_id) =>{

    const swimmingsuit = {
        "name": "swimming suit",
        "type": "clothing",
        "packed": false
    }
    const sunscreen = {
        "name": "sunscreen",
        "type": "accessories",
        "packed": false
    }
    const sandals = {
        "name": "sandals",
        "type": "clothing",
        "packed": false
    }

      const newitem1 =  await axios.post(`http://localhost:8080/trips/${trip_id}/item`, swimmingsuit);
      const newitem2 =  await axios.post(`http://localhost:8080/trips/${trip_id}/item`, sunscreen);
      const newitem3 =  await axios.post(`http://localhost:8080/trips/${trip_id}/item`, sandals);

    };