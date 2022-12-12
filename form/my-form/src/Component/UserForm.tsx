import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";


const UserForm=()=>{
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event:any) => {
      const form = event.currentTarget;
      console.log(form);
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  const testValidation = (e:any)=>{
      const target = e.target;
      console.log(target?.validationMessage)
  }  
    return(
      <><Form noValidate validated={validated} onSubmit={handleSubmit}>
     <Row className="col-6" >
     <h1 className="d-inline-block align-top float-start"><b>User Registration Form</b></h1><br></br>
     </Row>
     <Row className='mx-2 my-2'>
        <Col>      
               <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label  className="float-start">Name*</Form.Label>
                <Form.Control required  pattern="^[a-zA-Z]+ [a-zA-Z]+$" type="text" placeholder="e.g.Raja Rancho" />
                <Form.Text className="text-muted float-start">
                   Add First name and last name e.g.'Raja Rancho'
                </Form.Text>
            </Form.Group>
         </Col>
         <Col>
                <Form.Label  className="float-start">Phone Number*</Form.Label>
                <InputGroup className="mb-3" >
             
                 <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                  <Form.Control
                  required
                  pattern='\d{10}'
                  placeholder="e.g 1111111111"
                   aria-label="Username"
                aria-describedby="basic-addon1"
                   />
                     
                </InputGroup>
                <Form.Text className="text-muted float-start mt-0">
                 Enter 10 digit Mobile Number
                </Form.Text>
         </Col>
    </Row>  
    <Row className='mx-2 my-2'>
        <Col>
               <Form.Group className="mb-3" controlId="validationCustom03">
               <Form.Label className="float-start">Email address*</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" />       
               </Form.Group>
        </Col>
        <Col>
             <Form.Group className="mb-3" controlId="validationCustom04">
             <Form.Label className="float-start">Password*</Form.Label>
             <Form.Control  required type="password" placeholder="Password" />
             </Form.Group>
        </Col>
    </Row> 
    <Row className='mx-2 my-2'>
        <Col>
              <Form.Group className="mb-3" controlId="validationCustom05">
              <Form.Label  className="float-start">Address*</Form.Label>
              <Form.Control required type="text" placeholder="1234  Main St" />
              </Form.Group>
        </Col>
    </Row> 
    <Row   className='mx-2 my-2'>
             <Form.Group className="mb-3" controlId="validationCustom06">
              <Form.Label  className="float-start">Address 2</Form.Label>
              <Form.Control required type="text" placeholder="Apartment, studio, or floor" />
              </Form.Group>
    </Row>  
    <Row   className='mx-2 my-2'>
        <Col>
              <Form.Group className="mb-3" controlId="validationCustom07">
              <Form.Label  className="float-start">City*</Form.Label>
              <Form.Control type="text" required  />
              </Form.Group>
        </Col>
        <Col>  
             {/* <Form.Label  className="float-start">State*</Form.Label>
              <Form.Select aria-label="Default select example" required>
                 <option>Choose....</option>
                 <option value="1">Maharashtra</option>
                 <option value="2">Goa</option>
                 <option value="3">Gujarat</option>
              </Form.Select> */}
               <Form.Control as="select" required >
                <option >choose</option>
                
              
                <option value="1">Maharashtra</option>
                <option value="2">Goa</option>
                <option value="3">Kerala</option>
                
              </Form.Control>
        </Col>
        <Col>
                <Form.Group className="mb-3" controlId="validationCustom08">
                <Form.Label  className="float-start">Zip*</Form.Label>
                <Form.Control type="text"  required pattern='\d{6}' />
                <Form.Text className="text-muted float-start">
                 Enter 6 digit number e.g.123456
                </Form.Text>
               </Form.Group>
        </Col>

    </Row>
    <Row className="mx-2">
        <Col className="col-3 mx-2  float-start">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check  required type="checkbox" label="Check me out" />
            </Form.Group>
        </Col>
    </Row> 
    <Col className="col-3 mx-2 float-start">
         <Button variant="primary" type="submit">
           Submit
         </Button>
      </Col> 
   
 </Form></>
    );
}
 export default UserForm;