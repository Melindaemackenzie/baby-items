import React from "react";
import Card from "./Card";
import {NavLink} from "react-router-dom";

function Feeding({items}) {
    const feedItems = items.filter((item) => item.category === 'Feed');
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
                <h1>Feeding Items</h1>
                {feedItems.map((item) => (
                <Card key={item.id} items={items} />
                ))}
        </div>
    )
}

export default Feeding;