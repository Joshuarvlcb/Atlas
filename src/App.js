import Logo from './assests/weather-logo.png'
import Sun from './assests/sunny.png'
import {Nav} from 'react-bootstrap'
import { BiHome } from "react-icons/bi";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {
  return <>
    
  <div className = 'd-flex align-items-center justify-content-center' style ={{height:'100vh',width:'100vw'}}>
    <div className = 'app-container'>
        <div className = 'nav-container' style = {{margin:'0'}}>
          <div className = 'row logo-con' style = {{height:'50px',color:'white',fontSize:'22px',fontWeight:'500'}}  >
                <div className = 'col d-flex justify-content-center align-items-center '> <img height = '40px'src = {Logo} className = 'padding'></img> ATLAS</div>
          </div>
<Nav style = {{paddingLeft:'25px',height:'205px'}}>
  <Nav.Item >
    <Nav.Link style = {{height:'40px', color:'white',fontWeight:'600'}} className = 'd-flex align-items-center' href
     = '#'><BiHome color = 'white' style = {{paddingRight:'10px',height:'33px',width:'33px'}} /> Home   </Nav.Link>
     
    

  </Nav.Item>
</Nav>

<Container className = 'd-flex justify-content-center'>
<div as = 'div' className = 'card-con'>
  <Row >
  <div className = 'd-flex justify-content-start' style = {{width:'30px',paddingLeft:'30px',paddingTop:'5px'}}> 
        <img src= {Sun} height = '70px' alt="" />
    </div>
    <Col className = 'd-flex justify-content-center flex-column text-con align-items-center' style = {{paddingRight:'40px',paddingTop:'14px'}} >
      <div style = {{fontSize:'20px',fontWeight:'600'}}>Today</div>
      <div style = {{fontWeight:'500'}}>11:44 </div>
      <div style = {{fontSize:'12px',fontWeight:'500',color:'rgba(0, 0, 0, 0.562)'}}>Mon,11 January</div>
      
    
    </Col>
  </Row>
  

    <Row  >
        <Col className = 'd-flex  flex-column align-items-center'>
          <div style = {{fontSize:'40px',fontWeight:'600'}}>105°</div>
          <div style = {{fontSize:'20px',fontWeight:'500'}}>Buckeye</div>
          <div style = {{fontSize:'13px',color:'rgba(0, 0, 0, 0.6.5)'}}>United States</div>

        </Col>
    </Row>

    <Row className = 'mt-2'>
        <Col className = 'd-flex justify-content-around'>
        <div style = {{fontWeight:'500'}}>Humidity:</div>

        <div style = {{fontWeight:'500'}}>70%</div>
        </Col>

    </Row>
    <Row  >
      <Col className = 'd-flex justify-content-center mt-1'>
      <ProgressBar now = {70} style = {{height:'5px',padding:'0px',width:'80%'}} />
      </Col>
     
    </Row>
    <Row className = 'mt-2'>
        <Col className = 'd-flex justify-content-around'>
        <div style = {{fontWeight:'500'}}>Percipitation:</div>

        <div style = {{fontWeight:'500'}}>20%</div>
        </Col>

    </Row>
    <Row  >
      <Col className = 'd-flex justify-content-center mt-1'>
      <ProgressBar now = {20} style = {{height:'5px',padding:'0px',width:'80%'}} />
      </Col>
     
    </Row>
</div>


</Container>


        </div>
{/* weather forecast */}

<div className="forcast-con">
<Row style = {{width:'95%'}}>

  <Col className = 'd-flex justify-content-end align-items-center' style = {{height:'80px'}}>ICON</Col>

</Row>

<div className = 'weather-forcast' style = {{paddingLeft:'20px'}}>
  <h3 style = {{paddingBottom:'20px'}}>Weather Forecast</h3>

  <Row>
    <Col>1</Col>
    <Col>2</Col>
    <Col>3</Col>
    <Col>4</Col>
    <Col>5</Col>
  </Row>
</div>

</div>


{/* <Row >

  <Col className = 'd-flex justify-content-end align-items-center' style = {{height:'50px'}}>ICON</Col>

</Row> */}



    </div>


  </div>
  
  
  
  
  </>;
}

export default App;
