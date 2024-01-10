import React from "react";
import NavBar from "./NavBar";



function Home () {
    
    return(
        <div>
            <h1 className = "welcome ">WELCOME!</h1>
            <p>We hope to provide you with the best baby necessities for your new adventure!</p>
            <hr></hr>
            <p>Click on the links below to view our items by cateogry</p>
            <NavBar />
        </div>
        
        )
}


export default Home;