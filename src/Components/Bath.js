import React from "react";
import Card from "./Card";

function Bath({item})  {
    const bathItems = item.filter((item) => item.category === 'Bath');

    return(
        <div>
                <h1>Bath Items</h1>
                {bathItems.map((item) => (
                <Card key={item.id} item={item} />
        ))}
    </div>
    );
}
export default Bath;