import axios from 'axios';

export const generateHikingItems = async (trip_id) =>{

    const daybag = {
        "name": "day bag",
        "type": "clothing",
        "packed": false
    }
    const athleticclothing = {
        "name": "activewear",
        "type": "clothing",
        "packed": false
    }
    const hikingshoes = {
        "name": "hiking shoes",
        "type": "clothing",
        "packed": false
    }

    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, daybag);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, hikingshoes);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, athleticclothing);


    };