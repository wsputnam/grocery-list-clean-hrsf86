import React from 'react';
import ReactDOM from 'react-dom';

import groceryList from '../../database.data.js';

import GroceryList from './components/GroceryList.jsx';
import GroceryItem from './components/GroceryItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: groceryList,
      line: false
    }
  }
  addGrocery(event) {
    event.preventDefault();
    const list = this.list;
    const newItem = {};
    this.quantity;
    this.description;
    newItem.quantity = this.quantity.value;
    newItem.description = this.description.value;
    this.state.list.forEach(function(item) {
      if (item.description.toLowerCase() === newItem.description.toLowerCase()) {
        item.quantity = item.quantity + newItem.quantity
      }
    })
    newItem.id = this.state.list[this.state.list.length - 1].id + 1;
    this.setState({
      list:[...this.state.list, newItem]
    });
  }

  onGroceryItemClick() {
    this.setState({
      line: !this.state.line
    })
  }

  render () {
    console.log('rendered');
    var style = {
      textDecoration: this.state.line ? 'line-through' : 'none'
    }
    return (
    <div>
      <span>Grocery List</span>
      <span>Description<input ref={(input) => {this.description = input}} type="text" /></span>
      <span>Quantity<input ref={(input) => {this.quantity = input}} type="text"/><button type="button" onClick={(event) => {this.addGrocery(event)}}>Add Grocery</button></span>
      <GroceryList items={this.props.list} />
     
   </div>
   );
  }
}

// rendering everything on the app id


ReactDOM.render(<App />, document.getElementById('app'));