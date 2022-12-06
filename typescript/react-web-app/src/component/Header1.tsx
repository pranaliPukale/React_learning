import React from "react";
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
 class Header1 extends React.Component{
render(): React.ReactNode {
return (<header>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      React App
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/Home' className="nav-link active" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/UserList' className="nav-link active" >User</Link>
        </li>
        <li className="nav-item">
         <Link to='/ProductList' className="nav-link active">Product</Link>
        </li>
        <li className="nav-item">
         <Link to='/Lay-out' className="nav-link active">Layout</Link>
        </li>
        </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>)
    
}
}
export default Header1;