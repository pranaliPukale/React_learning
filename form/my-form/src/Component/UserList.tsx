import { error } from "console";
import { useEffect, useState } from "react";
import { Accordion, Alert, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AddUser } from "./AddUser";
import { UpdateUser } from "./UpdateUser";
import { getUserList ,addUpdateUserList} from "../action/userAsyncAction";
import { fetchUserApi,AddUpdateApi, user } from "../reducer/userReducer";
import { useDispatch, useSelector } from 'react-redux';
import {  AppDispatch, RootState } from "..";
export interface userType {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
};
// interface userApiSuccess {
//     page: number,
//     per_page: number,
//     total: number,
//     total_pages: number,
//     data: userType[]
// }
export const UserList=()=>{
    const [show,setShow]=useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   // const [UserList, setUserList] = useState<userApiSuccess>();
    // useEffect(() => {
    //     fetch('https://reqres.in/api/users')
    //         .then(response => response.json())
    //         .then(result => setUserList(result))
    // }, []);

   const {user_res:UserList,loading:userLoader,error:fetchError}=useSelector<RootState,fetchUserApi>(state=>state.user)
   const dispatch  = useDispatch<AppDispatch>();
   console.log(getUserList);
   useEffect(()=>
   {
    dispatch(getUserList() as  any);
   },[])
   const {user_res:userSuccess,loading:addUpdateLoader,error:auError}=useSelector<RootState,AddUpdateApi>(state=>state.user)
   const handleSubmit=(e:{preventdefault:()=>void;})=>
   {
    e.preventdefault();
    if(isUpdate)
    dispatch( addUpdateUserList(formData, 'PUT'));
     else dispatch( addUpdateUserList(formData, 'POST'));
    setIsUpdate(false);
    setFormData({name:'',job:''});
   };
   const addUpdateUser =(user:userType)=>
   {
    setIsUpdate(true);
    setFormData(user);
    handleShow();
   };


    const [formData, setFormData] =useState<any>({name:'',job:'' });
    const [validated, setValidated] = useState(false);
    const [success1, setSuccess1]=useState<string>();
    const [successError,setSuccessError]=useState<string>();
   const [showError,setShowError]=useState<string>();
   const [isUpdate, setIsUpdate]= useState(false);

   const [deletedUser, setDeletedUser]=useState<string>();
   const [deletedUserError, setDeletedUserError]=useState<string>();
const [Validate,setValidate]=useState<number>();
  //  const addApi=()=>{
  //   fetch('https://reqres.in/api/users',{
  //       method:'POST',
  //       headers:{
  //                 "Content-Type": "application/json",
  //                 "Accept": "application/json"   
  //               },
  //       body:JSON.stringify(formData)
  //     }).then(response=>response.json())
  //       .then(result=>{
  //             if(result)
  //              setSuccess1("User added successfully")
  //              else
  //              setSuccessError("Not Added")
  //         })
  //       .catch(error =>{ 
  //         console.log(error);
  //         error &&  setShowError('Opps something wrong...')
          
  //       });
  //     }
  //     const updateApi=(user:userType)=>{
  //       fetch(`https://reqres.in/api/users/${user.id}`,
  //       {method:'PUT',
  //        body:JSON.stringify({
  //              name : formData.name,
  //              job :formData.job
  //               }),
  //       headers: {
  //                 'Content-type': 'application/json; charset=UTF-8',
  //              },
  //      } ).then(responce=>responce.json())
  //         .then(result=>{
  //           setIsUpdate(true)
  //           console.log(result)
  //           setFormData({name:'',job:''})
  //         }).catch(error=>console.log(error) )
  //     }
  
       const deleteUser = (userId: number) => {
      
console.log("delete");

        fetch(`https://reqres.in/api/users/${userId}`, 
        {method:'DELETE'})
            .then(response => response)
            .then(result => {
                setValidate(result.status)
                console.log(result.status);
                
                if(result?.status ===204)
                setDeletedUser(` User (${userId}) deleted Successfully...`);
                else setDeletedUserError(` User (${userId}) not deleted yet please try again ...`);

            }).catch(error=>{
                console.log(error);
                setDeletedUserError(`User (${userId}) not deleted yet please try again ...`)})

    }
    return (<>
    <Row className="p-4">
       <Col className="col-4">
          <Button variant="primary"  onClick={handleShow}> Add more User ++</Button>
       </Col>
       <Col className="m-2 col-6">
        {/* <AddUser callApi={addUpdateUser(user)} show={show} handleClose={handleClose}/>  */}
          {/* { successError?<Alert variant="primary">{successError}</Alert>:
     success1 &&<Alert variant="success">{success1}</Alert>}         */}
       { Validate===204?
       (deletedUserError ? <Alert variant="danger">{deletedUserError}</Alert>:
       deletedUser && <Alert variant="success">{deletedUser}</Alert>)
       :
       (successError?<Alert variant="primary">{successError}</Alert>:
     success1 &&<Alert variant="success">{success1}</Alert>)
       }   
       </Col>
    </Row>
        <Row className="p-4 ">
            <Col>  <Accordion defaultActiveKey="1">
                 {UserList?.data.map((user) => (
                 <Accordion.Item eventKey={`${user.id}`} key={user.id}>
                      <Accordion.Header>{user.first_name}  {user.last_name}</Accordion.Header>
                      <Accordion.Body>
                          <Row>
                               <Col md="2"><img src={user.avatar} /></Col>
                               <Col >Email : <Link to={`/user-detail/${user.id}`} >{user.email}</Link> </Col>
                               <Col className="align-self-end col-auto">
                                    <Button>Update</Button>{' '}
                                       <AddUser callApi={()=>addUpdateUser(user)} show={show} handleClose={handleClose} />  
                                    <Button onClick={()=>deleteUser(user.id)}>Delete</Button>{' '}
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
