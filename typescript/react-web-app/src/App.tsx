import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from "./component/ProductList";
import products from "./data/products.json";
import Header1 from './component/Header1'
import WebRoute from './WebRoute';
import LeftComponent from './component/LeftComponent';

const App=()=> {
  return (
    <div className="container-fluid">
     <div>
        <Header1 />
        <LeftComponent/>
        {/* <WebRoute/> */}
          {/* <ProductList data={products} cardName={"Product"} />  */}
      </div>
   </div>
  );
}

export default App;
