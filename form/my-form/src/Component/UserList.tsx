import { error } from "console";
import { useEffect, useState } from "react";
import { Accordion, Alert, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AddUser } from "./AddUser";
import { UpdateUser } from "./UpdateUser";
export interface userType {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
};
interface userApiSuccess {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: userType[]
}
export const UserList=()=>{
    const [show,setShow]=useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [UserList, setUserList] = useState<userApiSuccess>();
    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(result => setUserList(result))
    }, []);
    const [formData, setFormData] =useState<any>({name:'',job:'' });
    const [validated, setValidated] = useState(false);
    const [success1, setSuccess1]=useState<string>();
    const [successError,setSuccessError]=useState<string>();
   const [showError,setShowError]=useState<string>();
   const [isUpdate, setIsUpdate]= useState(false);
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
              if(result)
               setSuccess1("User added successfully")
               else
               setSuccessError("Not Added")
          })
        .catch(error =>{ 
          console.log(error);
          error &&  setShowError('Opps something wrong...')
          
        });
      }
      const updateApi=(user:userType)=>{
        fetch(`https://reqres.in/api/users/${user.id}`,
        {method:'PUT',
         body:JSON.stringify({
               name : formData.name,
               job :formData.job
                }),
        headers: {
                  'Content-type': 'application/json; charset=UTF-8',
               },
       } ).then(responce=>responce.json())
          .then(result=>{
            setIsUpdate(true)
            console.log(result)
            setFormData({name:'',job:''})
          }).catch(error=>console.log(error) )
      }
    return (<>
    <Row className="p-4">
       <Col>
          <Button variant="primary"  onClick={handleShow}> Add more User ++</Button>
       </Col>
       <Col>
          <AddUser callApi={addApi} show={show} handleClose={handleClose}/> 
          { successError?<Alert variant="primary">{successError}</Alert>:
     success1 &&<Alert variant="success">{success1}</Alert>}        
       </Col>
    </Row>
        <Row className="p-4">
            <Col>  <Accordion defaultActiveKey="1">
                 {UserList?.data.map((user) => (
                 <Accordion.Item eventKey={`${user.id}`} key={user.id}>
                      <Accordion.Header>{user.first_name}  {user.last_name}</Accordion.Header>
                      <Accordion.Body>
                          <Row>
                               <Col md="2"><img src={user.avatar} /></Col>
                               <Col >Email : <Link to={`/user-detail/${user.id}`} >{user.email}</Link> </Col>
                               <Col className="align-self-end col-auto">
                                    <Button  >Update</Button>{' '}
                                      <UpdateUser call1={updateApi(user)} show={show} handleClose={handleClose} />
                                    <Button>Delete</Button>{' '}
                                    <Button><Link to={`/user-detail/${user.id}`} className="nav-link">Go to User Profile</Link></Button>
                                </Col >  
                          </Row>
                     </Accordion.Body>
                     </Accordion.Item>
                     ))}
               </Accordion >
           </Col>          
  </Row>
  </>);
}
