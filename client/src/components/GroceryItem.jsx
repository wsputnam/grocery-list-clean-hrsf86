import React from 'react';

export const GroceryItem = (props) => (
  <li>
  {props.grocery.description}
  {props.grocery.quantity}
</li>
)

// export default GroceryItem;

