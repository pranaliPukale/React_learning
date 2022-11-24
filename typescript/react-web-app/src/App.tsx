import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from "./component/ProductList";
import products from "./data/products.json";
import Header from './component/Header'

const App=()=> {
  return (
    <div className="App">
      <div >
        <Header />
      </div>
      <div>
         <ProductList data={products} cardName={"test name"} />
      </div>
   </div>
  );
}

export default App;
