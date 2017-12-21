import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: window.groceryList
    }
  }

  
  render () {
    return 
    <div>
    <span>Grocery List</span>
    <span>Description<input type="form"/></span>
    <span>Quantity<input type="form"/><button type="button">Add Grocery</button></span>
    <div items={this.state.list}></div>
   </div>
  }
}

// rendering everything on the app id

ReactDOM.render(<App />, document.getElementById('app'));