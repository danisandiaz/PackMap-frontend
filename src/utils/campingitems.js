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

      console.log(trip_id)
      const newitem1 =  await axios.post(`http://localhost:9090/trips/${trip_id}/item`, waterbottle);
      const newitem2 =  await axios.post(`http://localhost:9090/trips/${trip_id}/item`, sunscreen);
      const newitem3 =  await axios.post(`http://localhost:9090/trips/${trip_id}/item`, tent);
      const newitem4 =  await axios.post(`http://localhost:9090/trips/${trip_id}/item`, sleepingbag);

    };