import { useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePhoto from "./ProfilePhoto";
import {user} from './UserList';
import UserProfile from "./UserProfile";
const UserRoute=(props:user)=>{
  const [show,setShow]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   return(
    <Card className="col-3 mt-2">  
    <Card.Img variant="top" src={props.avatar_url}/>
    <ListGroup variant="flush">  
      <ListGroup.Item>Name:{props.login}</ListGroup.Item>
      <Card.Link href="#"><b>github_url:</b>{props.url}</Card.Link>
    </ListGroup>
    <Card.Body>    
    <Button variant="primary" size="sm" onClick={handleShow}> Open Photo</Button>
    <ProfilePhoto sizes={props.avatar_url} name={props.login} show={show} handleClose={handleClose}/>
       <Link to={`/UserDetails/${props.id}`} className='nav-link'>
    <Button variant="primary" size="sm" className="float-end"> 
        Goto Profile
        </Button>   
     </Link>    
    </Card.Body>    
  </Card>
 );
}
export default UserRoute;