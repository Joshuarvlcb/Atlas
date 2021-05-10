import Logo from './assests/weather-logo.png'

import {Nav} from 'react-bootstrap'
import { BiHome } from "react-icons/bi";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return <>
    
  <div className = 'd-flex align-items-center justify-content-center' style ={{height:'100vh',width:'100vw'}}>
    <div className = 'app-container'>
        <div className = 'nav-container'>
          <div className = 'row logo-con' style = {{height:'50px',color:'white',fontSize:'22px',fontWeight:'500'}}  >
                <div className = 'col d-flex justify-content-center align-items-center '> <img height = '40px'src = {Logo} className = 'padding'></img>  SUNNY</div>
          </div>
<Nav style = {{paddingLeft:'25px',height:'130px'}}>
  <Nav.Item >
    <Nav.Link style = {{height:'40px', color:'white',fontWeight:'600'}} className = 'd-flex align-items-center' href
     = '#'><BiHome color = 'white' style = {{paddingRight:'10px',height:'33px',width:'33px'}} /> Home   </Nav.Link>
     
    

  </Nav.Item>
</Nav>

<Container className = 'd-flex justify-content-center'>
<div as = 'div' className = 'card-con'>
  <Row className = 'd-flex justify-content-center' >
  <Col className = 'd-flex justify-content-end' style = {{padding:'14px 0px'}}> 
        logo
    </Col>
    <Col className = 'd-flex justify-content-start flex-column' style = {{padding:'10px 10px'}} >
      <div style = {{fontSize:'20px',fontWeight:'600'}}>Today</div>
      <div style = {{fontWeight:'500'}}>11:44 </div>
      <div style = {{fontSize:'12px',fontWeight:'500',color:'rgba(0, 0, 0, 0.562)'}}>Mon,11 January</div>
      
    
    </Col>
  </Row>
  

    <Row >
        <Col className = 'd-flex  flex-column align-items-center'>
          <div style = {{fontSize:'50px',fontWeight:'600'}}>105°</div>
          <div style = {{}}>Buckeye</div>
          <div>United States</div>

        </Col>
    </Row>
</div>


</Container>


        </div>
    </div>


  </div>
  
  
  
  
  </>;
}

export default App;
