import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from "./component/ProductList";
import products from "./data/products.json";
import Header1 from './component/Header1'
import WebRoute1 from './WebRoute';
import LeftComponent from './component/LeftComponent';
import LayoutComponent from './component/LayoutComponent';
import UserProfile from './component/UserProfile';
import UserRoute from './component/UserRoute';
import user from  './data/user.json';
import UserList from './component/UserList';
import WebRoute from './WebRoute';
const App=()=> {
  
  return (
      <div>
        <div>
         <Header1/>
         <WebRoute />
        {/* <UserList />  */}
         
        {/* <LayoutComponent />
        
         <LeftComponent/>  */}
       
        {/* <ProductList data={products} cardName={"Product"} />  */}
      </div>
   </div>
  );
}

export default App;
