import React, {useState, useEffect }from "react";
import '../App.css';
import Home from "./Home"
import Bath from "./Bath"
import Car from "./Car"
import Feeding from "./Feeding"
import Sleep from "./Sleep"
import NewItemForm from "./NewItemForm";

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {

const [item, setItem] = useState ([])

useEffect(() => {
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setItem(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    })
}, [])

const handleNewItemAdded = (newItem) => {
  setItem((prevItem)=> [...prevItem, newItem]);
}

  return (
    <div className="App">
      <br>
      </br>
      <header className="App-header">
        <h1>Must Have Baby Items! </h1>
        </header>
        <hr></hr>
      <Router>
        <Routes>
          <Route path="/" element={<Home item={item} />} />
          <Route path="/bath" element={<Bath item={item}/>} />
          <Route path="/car" element={<Car item={item}/>} />
          <Route path="/feeding" element={<Feeding item={item}/>} />
          <Route path="/sleep" element={<Sleep item={item}/>} />
          <Route path="/newitemform" element={<NewItemForm onNewItemAdded={handleNewItemAdded}item={item}/>}/>
        </Routes>
      </Router>

        
      </div>
    
  );
}

export default App;
