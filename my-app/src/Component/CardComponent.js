import React from "react";
import  user from '../user.png';
class CardComponent extends React.Component
{
  render(){
return(
  <body>
      <div className="card">
           <img src={user} alt='my'></img>
          <div >
            <h4><b>Pranali Pukale</b></h4>
            <p>{this.props.propList.collegeName} </p> 
            <p>{this.props.propList.university} </p>
            <p>{this.props.propObj.Course}</p>
            <p>{this.props.propObj.Year}</p>
            <p>{this.props.simpleProp}</p>
          </div>
      </div>
    </body>  
    );
}
}
export default CardComponent;