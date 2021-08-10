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

      console.log(trip_id)
      const newitem1 =  await axios.post(`http://localhost:8080/trips/${trip_id}/item`, formalattire);
      const newitem2 =  await axios.post(`http://localhost:8080/trips/${trip_id}/item`, fancyshoes);
    };