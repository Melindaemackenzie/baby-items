import React from "react";

function Sleep({items}) {
    const sleepItems = items.filter((item) => item.category === 'Sleep');


    return (
        <div>
            <h1>Sleeping Items</h1>
            {sleepItems.map((item) => (
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

export default Sleep;