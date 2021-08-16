import axios from 'axios';

export const generateCampingItems = async (trip_id) =>{

    const waterbottle = {
        "name": "water bottle",
        "type": "accessories",
        "packed": false
    }
    const sunscreen = {
        "name": "sunscreen",
        "type": "accessories",
        "packed": false
    }
    const tent = {
        "name": "tent",
        "type": "accessories",
        "packed": false
    }
    const sleepingbag = {
        "name": "sleeping bag",
        "type": "accessories",
        "packed": false
    }

    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, waterbottle);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, tent);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, sleepingbag);

    };