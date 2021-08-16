import axios from 'axios';

export const generateGeneralItems = async (trip_id) =>{

    const tshirts = {
        "name": "t-shirts",
        "type": "clothing",
        "packed": false
    }
    const pants = {
        "name": "pants",
        "type": "clothing",
        "packed": false
    }
    const sleepware = {
        "name": "sleepware",
        "type": "clothing",
        "packed": false
    }
    const socksunderware = {
        "name": "socks/underware",
        "type": "clothing",
        "packed": false
    }
    const jacket = {
        "name": "jacket",
        "type": "clothing",
        "packed": false
    }

    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, tshirts);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, pants);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, sleepware);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, socksunderware);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, jacket);
    };