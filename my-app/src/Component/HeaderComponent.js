import logo from '../logo.svg';
import React from 'react';
function HeaderComponent ()
{

    {
    return(
     <header  className='h1' >
     
               
        <img  src={logo} className="App-logo" alt="logo" height={50} width={50} />
        <div className='header-left'>   
           <p>React learn</p>
       </div>
       <span className="header-right">
           <a  href="#home">Home</a>
           <a href="#contact">Contact</a>
           <a href="#about">About</a>
        </span>
      
    </header>
    ) 
    }
}
export default HeaderComponent;