import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap"
type list1={
    show: boolean;
    handleClose: ()=>void;
    call1:(user:userType)=>void;
  }
  interface userType {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
};
export const UpdateUser=(props:list1)=>{
    const [formData, setFormData] =useState<any>({name:'',job:'' });
    const [validated,setValidated]=useState(false);
    const handleSubmit = (event: any) =>
      {
        const form = event.currentTarget;        
         event.preventDefault();
         event.stopPropagation();
         if (form.checkValidity() )
          {
           setValidated(true);
          props.call1(formData)
         
          }        
      }
      const handleChange = (event:any) => { 
        console.log(event.target.value,event.target.name);
        setFormData({...formData,[event.target.name]:event.target.value});
        console.log(formData[event.target.name]);
      }
    return<>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}  >
      
      <Modal show={props.show} onHide={props.handleClose}>
      <Form noValidate validated={false}  onSubmit={handleSubmit} >
        <Modal.Header closeButton>
       
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
                <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Name:</Form.Label>
                     <Form.Control type="text" placeholder="Enter name"
                      onChange={handleChange}
                          required defaultValue={formData.name} />
                     <Form.Label>Job:</Form.Label>
                     <Form.Control type="text" defaultValue={formData.job}
                      onChange={handleChange} required />
                 </Form.Group>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose} >Close</Button>
          <Button variant="primary" type='submit'>Add</Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </div>
    </>
}