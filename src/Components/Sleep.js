import React from "react";
import Card from "./Card";

function Sleep({item}) {
    const sleepItems = item.filter((item) => item.category === 'Sleep');


    return (
        <div>
            <h1>Sleeping Items</h1>
            {sleepItems.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>

    )
}

export default Sleep;