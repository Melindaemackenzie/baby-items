import React from "react";
import Card from "./Card";

function Car({item}) {
    const carItems = item.filter((item) => item.category === 'Car');

    return (
        <div>
                <h1>Car Items</h1>
                {carItems.map((item) => (
                    <Card key={item.id} item={item} />
        ))}
    </div>
    )
}
export default Car;