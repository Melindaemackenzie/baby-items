import React from "react";
import Card from "./Card";
import {NavLink} from "react-router-dom";

function Sleep({item}) {
    const sleepItems = item.filter((item) => item.category === 'Sleep');
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
            <h1>Sleeping Items</h1>
            {sleepItems.map((item) => (
                <Card key={item.id} item={item} />
            ))}
        </div>

    )
}

export default Sleep;