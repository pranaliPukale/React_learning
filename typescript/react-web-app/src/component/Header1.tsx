import logo from "../sun1.png";
const Header1=()=>{
 return (
   
       <nav className="navbar navbar-dark bg-dark">
         <a className="navbar-brand" href="#">
            <nav>
                <img src={logo} alt="logo" width="30" height="25"></img>
            </nav>
         </a> 
         <a href="#">Home</a>   
         <a href="#">Feature</a>     
         <a href="#">Price</a>
         <a href="#">About</a>
         <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="search" aria-label="search"></input>
            <button className="btn btn-outline-success" type="submit"></button>
        </form>  
       </nav>
   
 );
};
export default Header1;