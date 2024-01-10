import React from "react";

function Bath({items})  {
    const bathItems = items.filter((item) => item.category === 'Bath');

    return(
        <div>
                <h1>Bath Items</h1>
                {bathItems.map((item) => (
                
        ))}
    </div>
    )
}
export default Bath;