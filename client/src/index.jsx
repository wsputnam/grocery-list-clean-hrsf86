import React from 'react';
import ReactDOM from 'react-dom';

import {GroceryList} from './src/components/GroceryList';
import {GroceryItem} from './src/components/GroceryItem';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
                {id: 1, quantity: 5, description: "frozen pizza"},
                {id: 2, quantity: 10, description: "greek yogurt"},
                {id: 3, quantity: 2, description: "wine"},
                {id: 4, quantity: 1, description: "iced coffee"}
              ]
    }
  }
  
  render () {
    console.log('rendered');
    return (
    <div>
      <span>Grocery List</span>
      <span>Description<input type="form"/></span>
      <span>Quantity<input type="form"/><button type="button">Add Grocery</button></span>
      <GroceryList items={this.state.list} />
   </div>
   );
  }
}

// rendering everything on the app id


ReactDOM.render(<App />, document.getElementById('app'));