import { useEffect, useState } from "react"
import { ListGroup, Badge, Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { userType } from "./UserList"

interface userApiSuccess {
    data: userType,
    support: {
        url: string,
        text: string
    }
}
export const UserDetails=()=>{
    const {id} = useParams();
    const [user, setUser]= useState<userApiSuccess>();

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then(response=>response.json())
        .then(result=> setUser(result))
    },[id])
    return<>
    <h1>User Details</h1>
    <Row>
        <Col className="col-3">
            <img className="i1" src={user?.data.avatar} />
          </Col> 
          <Col>
          <ListGroup >
      <ListGroup.Item as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold"> ID:</div>
           ID
        </div>
        <Badge bg="primary" pill>
          {user?.data.id}
        </Badge>
      </ListGroup.Item>
      </ListGroup>
    <ListGroup >
      <ListGroup.Item as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold"> First Name:</div>
           first Name
        </div>
        <Badge bg="primary" pill>
          {user?.data.first_name}
        </Badge>
      </ListGroup.Item>
      </ListGroup>
      <ListGroup>
      <ListGroup.Item as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold"> Last Name:</div>
           last Name
        </div>
        <Badge bg="primary" pill>
          {user?.data.last_name}
        </Badge>
      </ListGroup.Item>
      </ListGroup>
      <ListGroup >
      <ListGroup.Item as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold"> Email:</div>
           Email
        </div>
        <Badge bg="primary" pill>
          {user?.data.email}
        </Badge>
      </ListGroup.Item>
      </ListGroup>
      </Col>
      </Row>
    </>
}