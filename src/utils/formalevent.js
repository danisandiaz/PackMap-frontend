import axios from 'axios';

export const generateFormalItems = async (trip_id) =>{

    const formalattire = {
        "name": "formal outfit",
        "type": "clothing",
        "packed": false
    }
    const fancyshoes = {
        "name": "fancy shoes",
        "type": "clothing",
        "packed": false
    }

    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, formalattire);
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/trips/${trip_id}/item`, fancyshoes);
    };