import React from 'react';
import GroceryList from './GroceryList.jsx';

const GroceryItem = (props) => (
  <li>
  {props.grocery.description + ' ' + 
  props.grocery.quantity}
</li>
)

export default GroceryItem;

