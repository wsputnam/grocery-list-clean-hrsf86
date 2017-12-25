import React from 'react';
import {GroceryItem} from './components/GroceryItem';
import {AddGrocery} from './AddGrocery'

export const GroceryList = (props) => (
  <div className="GroceryList" {props.items.map(function(item) {
    return <GroceryItem grocery={item}/>
  });}></div>
)

// export default GroceryList;

