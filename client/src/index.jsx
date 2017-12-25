import React from 'react';
import ReactDOM from 'react-dom';

// import {GroceryList} from './src/components/GroceryList';
// import {GroceryItem} from './src/components/GroceryItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
                {id: 1, quantity: 5, description: "frozen pizza"},
                {id: 2, quantity: 10, description: "greek yogurt"},
                {id: 3, quantity: 2, description: "wine"},
                {id: 4, quantity: 1, description: "iced coffee"}
              ],
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
    for (var i = 0; i < this.state.list.length; i++) {
      if (Object.values(this.state.list[i]).indexOf(this.description) !== -1) {
        this.state.list[i].quantity+=newItem.quantity;
        return;
      }
    }
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
      <div style={style} onClick={this.onGroceryItemClick.bind(this)}>{this.state.list.map(function(item) {
        return <p key={item.id}>{item.description} {item.quantity}</p>
      })}</div>
   </div>
   );
  }
}

// rendering everything on the app id


ReactDOM.render(<App />, document.getElementById('app'));