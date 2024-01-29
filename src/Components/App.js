import React, {useState, useEffect }from "react";
import '../App.css';
import Home from "./Home"
import Bath from "./Bath"
import Car from "./Car"
import Feeding from "./Feeding"
import Sleep from "./Sleep"
import NewItemForm from "./NewItemForm";
import Footer from "./Footer"

import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

function App() {

const [items, setItems] = useState ([])

useEffect(() => {
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setItems(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    })
}, [])

const handleNewItemAdded = (newItem) => {
  setItems((prevItem)=> [...prevItem, newItem]);
}

  return (
    <div className="App">
      <br>
      </br>
      <header className="App-header">
        <h1>Must Have Baby Items! </h1>
      </header>
          <img className='babypic' src='https://media4.giphy.com/media/21TLGIdROJLT2ERkmk/giphy.gif' alt='baby pic'/>
        <hr></hr>
      <Router>
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/bath" element={<Bath items={items}/>} />
          <Route path="/car" element={<Car items={items}/>} />
          <Route path="/feeding" element={<Feeding items={items}/>} />
          <Route path="/sleep" element={<Sleep items={items}/>} />
          <Route path="/newitemform" element={<NewItemForm onNewItemAdded={handleNewItemAdded}items={items}/>}/>
        </Routes>
      </Router>
      <Footer />

        
      </div>
    
  );
}

export default App;
