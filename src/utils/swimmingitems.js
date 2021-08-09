import axios from 'axios';



export const generateSwimmingItems = async (items, trip_id) =>{

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




      console.log(trip_id)
      const newitem1 =  await axios.post(`http://localhost:9090/trips/${trip_id}/item`, swimmingsuit);
      const newitem2 =  await axios.post(`http://localhost:9090/trips/${trip_id}/item`, sunscreen);
      const newitem3 =  await axios.post(`http://localhost:9090/trips/${trip_id}/item`, sandals);

    };

// export default generateSwimmingItems;


// export const toppings = [
//     {
//       name: "Capsicum",
//       price: 1.2
//     }]