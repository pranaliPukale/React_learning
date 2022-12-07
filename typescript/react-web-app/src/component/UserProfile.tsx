import { Row, Col, ListGroup } from "react-bootstrap";

import {user} from './UserList';

const UserProfile=(props:user)=>{
   
    return (
       <Row>
          <Col md={3}>
            <img src={props.avatar_url} />
        </Col>
        <Col>
        <ListGroup>
        <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">login</div>
          {props.login}
        </div>
      </ListGroup.Item>
    
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">id</div>
          {props.id}
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">node_id</div>
          {props.node_id}
        </div>
      </ListGroup.Item>    
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">url</div>
          <a href={props.url}>{props.url}</a>
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">followers_url</div>
          <a href={props.followers_url}>{props.followers_url}</a>
        </div>
      </ListGroup.Item>  
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">html_url</div>
          <a href={props.url}>{props.html_url}</a>
        </div>
      </ListGroup.Item>  
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">repos_url</div>
          <a href={props.url}>{props.repos_url}</a>
        </div>
      </ListGroup.Item>  
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">subscriptions_url</div>
          <a href={props.url}>{props.subscriptions_url}</a>
        </div>
      </ListGroup.Item>   
       <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">type</div>
          {props.type}
        </div>
      </ListGroup.Item>    
      <ListGroup.Item as="li"  className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">site_admin</div>
          {props.site_admin}
        </div>
      </ListGroup.Item>
    </ListGroup>
        </Col>
        </Row>
      )
}
export default UserProfile;