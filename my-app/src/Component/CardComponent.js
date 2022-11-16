import React from "react";
import  user from '../user.png';
class CardComponent extends React.Component
{
  render(){
return(

      <div className="card">
           <img src={user} alt='my'></img>
          <div >
            <h5><b>Pranali Pukale</b></h5>
            <p>{this.props.propList.collegeName} </p> 
            <p>{this.props.propObj.Year}</p>
            <p>{this.props.simpleProp}</p>
          </div>
      </div>
  
    );
}
}
export default CardComponent;