import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';



export default function TripItems({ items, setItems }) {


    const updateItem = (singleitem) => {

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/item/${singleitem.id}`, singleitem).then((response) => {
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