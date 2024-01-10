import React from "react";

function Bath({items})  {
    const bathItems = items.filter((item) => item.category === 'Bath');

    return(
        <div>
                <h1>Bath Items</h1>
                {bathItems.map((item) => (
                <div key={item.id}>
                    <p className= 'item-name'>{item.name}  </p>
                    <img src ={item.image} alt ='image' style={{ width: '300px', height: '250px' }}/>
                    <br></br>
                    <br></br>
                    <p className= 'description'>{item.description}</p>
                </div>
        ))}
    </div>
    )
}
export default Bath;