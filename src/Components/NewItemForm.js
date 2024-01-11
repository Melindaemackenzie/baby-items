import React, { useState } from "react";
import {NavLink} from "react-router-dom";

function NewItemForm ({items, onNewItemAdded}) {
    const [newItemData, setNewItemData] = useState({
        name: '',
        image: '',
        description: '',
        category: '',
    });
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

    const handleInputChange = (e) => {
        setNewItemData({
            ...newItemData, [e.target.name] :e.target.value
        })
        console.log(e.target.value)
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: newItemData.itemName,
            image: newItemData.itemImage,
            description: newItemData.itemDescription,
            category: newItemData.itemCategory
        }
        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
        .then (r => r.json())
        .then(newItem => {
            console.log(newItem)
        })

        onNewItemAdded(newItem);
       

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
            <h1 className='item-form'>Add your own item below!</h1>
            <br></br>
            <h2 className='category-options'>Category options are:</h2>
            <h3 className='categories' >Bath, Car, Feed, Sleep</h3>
            <form onSubmit={handleSubmit}>
                <label>Item Name:</label>
                <input name="itemName" value={newItemData.itemName} onChange={handleInputChange}type="text"/><br/>
                <br></br>
                <label>Item image URL:</label>
                <input name ="itemImage" value={newItemData.itemImage} onChange={handleInputChange}type="text"/><br/>
                <br></br>
                <label>Item Description:</label>
                <input name="itemDescription" value={newItemData.itemDescription} onChange={handleInputChange}type="text"/><br/>
                <br></br>
                <label>Item Category:</label>
                <input name="itemCategory" value={newItemData.itemCategory} onChange={handleInputChange}type="text"/><br/>
                <br></br>
                <label></label>
                <input type="submit"/>

            </form>
        </div>

    )
}

export default NewItemForm;