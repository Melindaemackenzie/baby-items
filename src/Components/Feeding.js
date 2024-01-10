import React from "react";

function Feeding({items}) {
    const feedItems = items.filter((item) => item.category === 'feed');

    return (
            <div>
                <h1>Feeding Items</h1>
                {feedItems.map((item) => (
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

export default Feeding;