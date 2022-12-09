import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";


const UserForm=()=>{
    return(
      <><Form>
     <Row>
     <h1 className="d-inline-block align-top float-start"><b>User Registration Form</b></h1><br></br>
     </Row>
     <Row className='mx-2 my-2'>
        <Col>      
               <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label  className="float-start">Name*</Form.Label>
                <Form.Control type="text" placeholder="e.g.Raja Rancho" />
                <Form.Text className="text-muted float-start">
                   Add First name and last name e.g.'Raja Rancho'
                </Form.Text>
            </Form.Group>
         </Col>
         <Col>
                <Form.Label  className="float-start">Phone Number*</Form.Label>
                <InputGroup className="mb-3">
             
                 <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                  <Form.Control
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
               <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label className="float-start">Email address*</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />       
               </Form.Group>
        </Col>
        <Col>
             <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label className="float-start">Password*</Form.Label>
             <Form.Control type="password" placeholder="Password" />
             </Form.Group>
        </Col>
    </Row> 
    <Row className='mx-2 my-2'>
        <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label  className="float-start">Address*</Form.Label>
              <Form.Control type="text" placeholder="1234  Main St" />
              </Form.Group>
        </Col>
    </Row> 
    <Row   className='mx-2 my-2'>
             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label  className="float-start">Address 2</Form.Label>
              <Form.Control type="text" placeholder="Apartment, studio, or floor" />
              </Form.Group>
    </Row>  
    <Row   className='mx-2 my-2'>
        <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label  className="float-start">City*</Form.Label>
              <Form.Control type="text"  />
              </Form.Group>
        </Col>
        <Col>
        </Col>
        <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label  className="float-start">Zip*</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted float-start">
                 Enter 6 digit number e.g.123456
                </Form.Text>
               </Form.Group>
        </Col>

    </Row>
    <Row  className='mx-2 my-2 float-start'>
             <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
    </Row>
    <br></br>
    <Row>
    <Button type="submit"  size='sm'>Submit</Button>
    </Row>  
     </Form></>
    );
}
 export default UserForm;