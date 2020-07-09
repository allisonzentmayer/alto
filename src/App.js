import React from 'react';
import logo from './logo.svg';
import './App.css';
import products from './data/products.json';

export default class App extends React.Component {

  state = {
    displayProducts: [],
  };


  products() {
    let data = products;
    return data;
  };

  displayProducts() {
    return this.state.displayProducts.map((product) => {
      return (<div>{product.name + ' ' + product.strength}</div>
      );
    });
  }

  setDisplayProducts(e) {
    let searchValue = e.target.value;
    let matchingProducts = products.filter((product) => product.name.includes(searchValue.toUpperCase()));
    this.setState({displayProducts: matchingProducts});
  }

  render () {
    return (
      <div>
        <input onChange={(e) => {
          this.setDisplayProducts.bind(this)
          this.setDisplayProducts(e)
          }} type="text"/>
        <div className="dropdown-options">
          {this.displayProducts()}
        </div>
      </div>
    );
  }
}
