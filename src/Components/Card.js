import React from "react";

function Card({item}) {
    return (
        <div key={item.id}>
            <p className= 'item-name'>{item.name}  </p>
            <img src ={item.image} alt ='image' style={{ width: '300px', height: '250px' }}/>
            <br></br>
            <br></br>
            <p className= 'description'>{item.description}</p>
        </div>
    )
}

export default Card;
