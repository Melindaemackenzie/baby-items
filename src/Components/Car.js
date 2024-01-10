import React from "react";

function Car({items}) {
    const carItems = items.filter((item) => item.category === 'Car');

    return (
        <div>
                <h1>Car Items</h1>
                {carItems.map((item) => (
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
export default Car;