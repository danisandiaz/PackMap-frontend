import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';



export default function TripItems({ items, setItems }) {
    const [UpdatingItemData, setUpdatingItemData] = useState(
        {id:'', name:'', packed:'', trip:'', type:''}
        );


    console.log(items)

    const updateItem = (singleitem) => {
        
        const UpdatingItem = {
            "name" : singleitem.name,
            "packed": !singleitem.packed,
            "type": singleitem.type
        }

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/item/${singleitem.id}`, UpdatingItem).then((response) => {
            console.log(response)

            let newItemsState = [...items];
            for(let i = 0; i < newItemsState.length; i++){
                if(newItemsState[i].id === singleitem.id){
                    newItemsState[i].packed = !newItemsState[i].packed;
                }
            }
            setItems(newItemsState);
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t update item.');
        });
    }

    const itemElements = items.map((singleitem) => {
        return (
            <Form.Check
                inline
                type="checkbox"
                label={singleitem.name}
                checked={singleitem.packed}
                onClick={() => { console.log(singleitem);
                    updateItem(singleitem);
                    console.log(singleitem);
                }}
            />
        )
    });


    return (
        <div>
            {itemElements}
        </div>
    )
};