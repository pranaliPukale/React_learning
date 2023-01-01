import { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap"
type list1={
  show: boolean;
  handleClose: ()=>void;
  callApi:any;
}
export const AddUser=(props:list1)=>{
    const [formData, setFormData] =useState<any>({name:'',job:'' });
    const [validated, setValidated] = useState(false);
    const [success1, setSuccess1]=useState<string>();
    const [successError,setSuccessError]=useState<string>();
   
      const handleSubmit = (event: any) =>
      {
        const form = event.currentTarget;        
         event.preventDefault();
         event.stopPropagation();
         if (form.checkValidity() )
          {
           setValidated(true);
           props.callApi();
         
          }        
      }
  //     const handleSubmit=(e:{preventdefault:()=>void;})=>
  //  {
  //   e.preventdefault();
  //   if(isUpdate)
  //   dispatch( addUpdateUserList(formData, 'PUT'));
  //    else dispatch( addUpdateUserList(formData, 'POST'));
  //   setIsUpdate(false);
  //   setFormData({name:'',job:''});
  //  };
    
      const handleChange = (event:any) => { 
        console.log(event.target.value,event.target.name);
        setFormData({...formData,[event.target.name]:event.target.value});
        console.log(formData[event.target.name]);
      }
    return<>
     { successError?<Alert variant="primary">{successError}</Alert>:
     success1 &&<Alert variant="success">{success1}</Alert>}
     <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}  >
      
      <Modal show={props.show} onHide={props.handleClose}>
      <Form noValidate validated={false}  onSubmit={handleSubmit} >
        <Modal.Header closeButton>
       
          <Modal.Title>Add User</Modal.Title>
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