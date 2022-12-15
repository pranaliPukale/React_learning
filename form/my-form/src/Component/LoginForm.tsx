import { useState } from 'react';
import { Alert, Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom';
interface loginResponseType {
  error?: string;
}
const LoginForm = ()=> {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] =useState<any>({email:'',password:'' });
    const [loginResponse, setLoginResponse] = useState<loginResponseType>() 
    const callSubmitApi=()=>{
      fetch('https://reqres.in/api/login',{
        method:'POST',
        headers:{
                  "Content-Type": "application/json",
                  "Accept": "application/json"   
                },
        body:JSON.stringify(formData)
      }).then(response=>response.json())
        .then(result=>{
                      setLoginResponse(result)
                        if(result?.token)
                        {
                          sessionStorage.setItem('auth',result.token);
                           navigate('/');
                        }
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
            callSubmitApi();
           } 
         
       }

      const handleChange = (event:any) => { 
        console.log(event.target.value,event.target.name);
        setFormData({...formData,[event.target.name]:event.target.value});
        console.log(formData[event.target.name]);
      }

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
       {loginResponse?.error && <Alert key={'danger'} variant={'danger'}>
          {loginResponse?.error}
        </Alert>}
    <Card style={{ width: '25rem' }} className='m-auto center'>
    <Card.Body>
        <Form.Label><b >Login  Form</b></Form.Label>
        <br></br>
        <Form noValidate validated={false} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='float-start'>Email address</Form.Label>
        <Form.Control type="email"
         name='email'
         value={formData.email}
        placeholder="enter an email"
         onChange={handleChange}
        required/>
        <Form.Text className="text-muted ">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='float-start'>Password</Form.Label>
        <Form.Control   type="password"
        name="password"
         value={formData.password}
        placeholder="enter a password"
         onChange={handleChange}
          required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" className='float-start' />
      </Form.Group>
      <br></br>
      <Row><Col className='col-3'>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Col></Row>
      
    </Form>
    </Card.Body></Card>
    </div>
  );
}
export default LoginForm;