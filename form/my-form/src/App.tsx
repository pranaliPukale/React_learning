import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavComponent from './Component/NavComponent';
import UserForm from './Component/UserForm';
import WebRoute from './WebRoute';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from './Component/LoginForm';


function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;
  const auth = sessionStorage.getItem('auth');
  console.log('aaaaa',auth);
useEffect(()=>{
if(auth){
  navigate(path);
} else navigate('login');

},[auth,path]);
  return (
    <div className="App">
   
    {auth && <NavComponent/>} 
      <WebRoute/>
      {/* <UserForm/> */}
     
    </div>
  );
}

export default App;


