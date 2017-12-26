import React from 'react';
import GroceryItem from './GroceryItem.jsx';
import AddGrocery from './AddGrocery.jsx'

const GroceryList = (props) => (
  <div className="GroceryList" {props.items.map((item) => {
    return <GroceryItem grocery={item}/>
  });}></div>
)

export default GroceryList;

