import React, { useState } from "react";

function NewItemForm ({items}) {
    const [newItemData, setNewItemData] = useState({
        name: '',
        image: '',
        description: '',
        category: '',
    });

    const handleInputChange = (e) => {
        setNewItemData({
            ...newItemData, [e.target.name] :e.target.value
        })
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
            //if? newItemCategory === bath
            // useParams
            console.log(newItem)
        })

    }

    return (
        <div>
            <h1 className='item-form'>Add your own item below!</h1>
            <br></br>
            <h2 className='category-options'>Category options are:</h2>
            <h3 className='categories' >Bath, Car, Feed, Sleep</h3>
            <form onSubmit={handleSubmit}>
                <label>Item Name:</label>
                <input name="itemName" onChange={handleInputChange}type="text"/><br/>
                <br></br>
                <label>Item image URL:</label>
                <input name ="itemImage" onChange={handleInputChange}type="text"/><br/>
                <br></br>
                <label>Item Description:</label>
                <input name="itemDescription" onChange={handleInputChange}type="text"/><br/>
                <br></br>
                <label>Item Category:</label>
                <input name="itemCategory" onChange={handleInputChange}type="text"/><br/>
                <br></br>
                <label></label>
                <input type="submit"/>

            </form>
        </div>

    )
}

export default NewItemForm;