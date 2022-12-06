import { Container ,Row,Col } from "react-bootstrap";
const LayoutComponent=()=>{
 return(
 <Container fluid >
    <Row className="mt-3">
        <Col className="bg-info border me-1 mb-1" md={1}  sm={2} xs={12} >Margin</Col>
        <Col >
          <Row>
             <Col className="bg-secondary border me-1 mb-1" md={6} sm={0}>Gallery</Col>
            
              <Col >
               <Col className="bg-success border mb-1" md={12} sm={12}  >Title</Col>
               <Col className="bg-primary border " md={12} sm={12}   >
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                  </ul>
               </Col>
              </Col>                     
          </Row>
          <Row><Col className="bg-danger border mb-1"md={12} sm={12}  >Description</Col></Row>
          <Row><Col className="bg-warning border ms-1 mt-2" md={12} sm={12} >Related</Col></Row>
        </Col>
        <Col className="bg-info  border mt-1" md={1} sm={12}  >Margin</Col>
    </Row>
 </Container>
 );
}
export default LayoutComponent;