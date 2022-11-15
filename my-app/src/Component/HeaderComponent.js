import logo from '../logo.svg';
import React from 'react';
function HeaderComponent ()
{

    {
    return(
     <header >
      <div className='App_header' style={{backgroundColor:"blue" ,color:"black"}}>
        <div style={{float:"left", display:"inline-flex"}}>       
           <img  src={logo} className="App-logo" alt="logo" height={50} width={50} />
           <p>React learn</p>
       </div>
       <div className="header-right">
           <a  href="#home">Home</a>
           <a href="#contact">Contact</a>
           <a href="#about">About</a>
        </div>
      </div>
    </header>
    ) 
    }
}
export default HeaderComponent;