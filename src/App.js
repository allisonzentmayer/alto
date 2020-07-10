import React from 'react';
import logo from './logo.svg';
import './App.css';
import productsJson from './data/products.json';

export default class App extends React.Component {

  state = {
    displayProducts: [],
    searchText: '',
  };


  products() {
    // NOTE: CACHE THIS
    return productsJson.filter((product) => product.facility === 'SF');
  };

  displayProducts() {
    return this.state.displayProducts.map((product) => {
      return (<div onClick={() => this.selectProduct(product)}>{product.name + ' - ' + product.strength}</div>
      );
    });
  }

  setDisplayProducts(e) {
    let searchValue = e.target.value;
    let matchingProducts = [];
    if (searchValue) {
      matchingProducts = this.products().filter((product) => product.name.includes(searchValue.toUpperCase()));
    }
    this.setState({ displayProducts: matchingProducts, searchText: searchValue });
  }

  selectProduct(product) {
    let displayName = product.name + ' - ' + product.strength;
    this.setState({ searchText: displayName });
  }

  render() {
    return (
      <div>
        <input value={this.state.searchText}
          onChange={(e) => {
            this.setDisplayProducts.bind(this)
            this.setDisplayProducts(e)
          }} type="text" />
        <div
          className="dropdown-options">
          {this.displayProducts()}
        </div>
      </div>
    );
  }
}
