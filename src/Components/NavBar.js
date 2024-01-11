import React from "react";

import { NavLink } from "react-router-dom";

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

function NavBar () {


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
        <NavLink
            to ="/bath"
            exact
            style={linkStyles}
            activestyle={{
                background: "darkblue",
            }}
        >
            Bath
        </NavLink>
        <NavLink
            to ="/car"
            exact
            style={linkStyles}
            activestyle={{
                background: "darkblue",
            }}
        >
              Car  
        </NavLink>
        <NavLink
            to="/feeding"
            exact
            style={linkStyles}
            activestyle={{
                background: "darkblue",
            }}
        >
            Feed
        </NavLink>
        <NavLink
            to="/sleep"
            exact
            style={linkStyles}
            activestyle={{
                background: "darkblue",
            }}
        >
            Sleep
        </NavLink>
        <NavLink
            to="/newitemform"
            exact
            style={linkStyles}
            activestyle={{
                background: "darkblue",
            }}
        >
            Add New Item!
        </NavLink>

    </div>
)}
export default NavBar;