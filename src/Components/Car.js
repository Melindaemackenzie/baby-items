import React from "react";
import Card from "./Card";
import {NavLink} from "react-router-dom";

function Car({item}) {
    const carItems = item.filter((item) => item.category === 'Car');
    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "white",
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
    
    }

    return (
        <div>
            <NavLink
            to ="/"
            exact
            style={linkStyles}
            activestyle={{
                background: "darkblue",
            }}
        >
            Home
        </NavLink>
                <h1>Car Items</h1>
                {carItems.map((item) => (
                    <Card key={item.id} item={item} />
        ))}
    </div>
    )
}
export default Car;