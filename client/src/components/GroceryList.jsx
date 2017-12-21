import React from 'react';

const GroceryList = (props) => (
  <div className="groceries" {props.items.map(function(item) {
    return <GroceryItem grocery={item}/>
  });}></div>
)

export default GroceryList;