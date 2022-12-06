import { Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {user} from './UserList';
import UserProfile from "./UserProfile";
const UserRoute=(props:user)=>{
   return(
    <Card className="col-3 mt-2">  
    <Card.Img variant="top" src={props.avatar_url}/>
    <ListGroup variant="flush">  
      <ListGroup.Item>Name:{props.login}</ListGroup.Item>
      <Card.Link href="#"><b>github_url:</b>{props.url}</Card.Link>
    </ListGroup>
    <Card.Body>
    <Button variant="primary" size="sm" >Show Photo</Button>  
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