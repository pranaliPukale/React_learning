import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap"
import { user } from "./UserList";
type propList ={
  sizes:string;
  show: boolean;
  name:string;
  handleClose: ()=>void;
}
const ProfilePhoto=(props:propList)=>{
  console.log(props);
  
  return (

  <>
        <Modal show={props.show} onHide={props.handleClose}  >
        <Modal.Header closeButton>
          <Modal.Title>Profile Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Card style={{ width: '18rem' }} className='mx-auto'>
      <Card.Img  variant="top" src={props.sizes} />
      <Card.Body>
        <Card.Text>
         <p className='text-center'><b>Name:-</b>{props.name}</p>
        </Card.Text>        
      </Card.Body>
    </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose} >
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>);
}
export default ProfilePhoto;