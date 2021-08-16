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

    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, sneakers);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, camera);
    };