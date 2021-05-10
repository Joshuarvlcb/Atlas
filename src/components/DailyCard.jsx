import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Sun from '../assests/sunny.png'
import ProgressBar from 'react-bootstrap/ProgressBar'
const DailyCard = () => {
    return  (
        <>
        <Container className = 'd-flex justify-content-center'>
<div as = 'div' className = 'card-con'>
  <Row >
    <Col>  <div className = 'd-flex justify-content-center' style = {{paddingTop:'5px'}}> 
        <img src= {Sun} height = '70px' alt="" />
    </div></Col>
    {/* <Col className = 'd-flex justify-content-starta flex-column text-con align-items-center ' style = {{paddingTop:'10px',paddingLeft:'0px'}} >
      <div style = {{fontSize:'20px',fontWeight:'600'}}>Today</div>
      <div style = {{fontWeight:'500'}}>11:44 </div>
      <div style = {{fontSize:'11px',fontWeight:'500',color:'rgba(0, 0, 0, 0.562)',textAlign:'center'}}>Mon,11 January</div>
      
    
    </Col> */}
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
        </>
    )
}

export default DailyCard