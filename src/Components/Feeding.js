import React from "react";
import Card from "./Card";

function Feeding({item}) {
    const feedItems = item.filter((item) => item.category === 'Feed');

    return (
            <div>
                <h1>Feeding Items</h1>
                {feedItems.map((item) => (
                <Card key={item.id} item={item} />
        ))}
    </div>
    )
}

export default Feeding;