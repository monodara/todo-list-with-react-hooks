import './App.css';
import React, { useState } from 'react';

function App() {
  //use hooks
  const[newItem, setNewItem] = useState("");
  const[itemList, setItemList] = useState([])

  function addItem(){
    if(!newItem){
      alert("Please enter an item!")
      return
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }
    setItemList(oldList => [...oldList, item])
    setNewItem("")
  }
  function deleteItem(id){
    const itemsAfterDel = itemList.filter( item => item.id !== id)
    setItemList(itemsAfterDel)
  }

  return (
    <div className="App">
      {/* The Head */}
      <h1>ToDo List With React Hooks</h1>
      {/* The Input */}
      <input
        type='text'
        placeholder='Add an item...'
        value={newItem}
        onChange={e=>{setNewItem(e.target.value)}}
      />
      {/* Add Button */}
      <button
        onClick = {addItem}
      >Add</button>
      {/* List of items */}
      <ul>
        {itemList.map(item => {
          return(
            <li key={item.id}>{item.value}
            <button onClick={()=>deleteItem(item.id)}>X</button>
            </li>
          )})}
      </ul>
    </div>
  );
}

export default App;
