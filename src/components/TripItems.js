import React from 'react';
import Form from 'react-bootstrap/Form';


export default function TripItems({ items, setitems}) {




    const itemElements = items.map((singleitem) => {

        console.log(singleitem)
        return (
            <Form.Check
                inline
                type="checkbox"
                label={singleitem.name}
                value={singleitem.packed}
                onClick={() => {singleitem.packed = !singleitem.packed; console.log(singleitem)}}
           />
        )
    });


    return (
        <div>
            {itemElements}
        </div>
    )
};