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

    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, swimmingsuit);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, sunscreen);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, sandals);

    };