import { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap"
type list1={
  show: boolean;
  handleClose: ()=>void;
}
interface loginResponseType {
  error?: string;
}
interface successResponce{success?:string}

export const AddUser=(props:list1)=>{
    const [formData, setFormData] =useState<any>({name:'',job:'' });
    const [validated, setValidated] = useState(false);
    const [success1, setSeccess1]=useState<successResponce>();
    const [loginResponse, setLoginResponse] = useState<loginResponseType>() 
   const addApi=()=>{
    fetch('https://reqres.in/api/users',{
        method:'POST',
        headers:{
                  "Content-Type": "application/json",
                  "Accept": "application/json"   
                },
        body:JSON.stringify(formData)
      }).then(response=>response.json())
        .then(result=>{
               setSeccess1(result)
          })
        .catch(error =>{ 
          console.log(error);
          error &&  setLoginResponse({'error':'Opps something wrong...'})
          
        });
      }
      const handleSubmit = (event: any) =>
      {
        const form = event.currentTarget;        
         event.preventDefault();
         event.stopPropagation();
         if (form.checkValidity() )
          {
           setValidated(true);
           addApi();
           <Alert key={'success'} variant={'success'}>success</Alert>
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
      style={{ display: 'block', position: 'initial' }}
    >   
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={false}  onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Name:</Form.Label>
                     <Form.Control type="text" placeholder="Enter name" onChange={handleChange}
                          required defaultValue={formData.name} />
                     <Form.Label>Job:</Form.Label>
                     <Form.Control type="text" defaultValue={formData.job} onChange={handleChange} required />
                 </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose} >Close</Button>
          <Button variant="primary" onClick={props.handleClose} >Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
}