import Logo from './assests/weather-logo.png'
import {RiArrowDropDownLine} from 'react-icons/ri'
import Header from './components/Header'
import NavLinks from './components/NavLinks'
import Sun from './assests/sunny.png'
import { BiHome } from "react-icons/bi";
import {Ri24HoursLine} from 'react-icons/ri'
import Faker from 'faker'
import {BiCalendarWeek} from 'react-icons/bi'
import Cards from './components/Cards.jsx'
import Az from './assests/az-background.jpg'
import Italy from './assests/italy-background.jpg'
import Paris from './assests/paris.bg.jpg'
import Spain from './assests/spain-bg.jpg'
import {Nav} from 'react-bootstrap'
import DailyCard from './components/DailyCard'
import {FiSettings} from 'react-icons/fi'
function App() {
  return <>
  <div className = 'd-flex align-items-center justify-content-center' style ={{height:'100vh',width:'100vw'}}>
    <div className = 'app-container'>
        <div className = 'nav-container' style = {{margin:'0'}}>
         <Header logo = {Logo}/>


         <Nav className = 'd-flex flex-column' style = {{paddingLeft:'25px',height:'205px'}}>
      <NavLinks name = 'Daily' logo = {<BiHome color = 'white' style = {{paddingRight:'10px',height:'33px',width:'33px'}} />} />
      <NavLinks name = 'Hours' logo = {<Ri24HoursLine color = 'white' style = {{paddingRight:'10px',height:'33px',width:'33px'}} />} />
      <NavLinks name = 'Weekly' logo = {<BiCalendarWeek color = 'white' style = {{paddingRight:'10px',height:'33px',width:'33px'}} />} />
      <NavLinks name = 'Settings' logo = {<FiSettings color = 'white' style = {{paddingRight:'10px',height:'33px',width:'33px'}} />} />

      
           </Nav>

<DailyCard/>



        </div>
{/* weather forecast */}

<div className="forcast-con">
<div className ='d-flex justify-content-end align-items-center' style = {{width:'95%',height:'20%'}}>

  <div className = 'icon'>
  <div className="icon-pic">
    <img src= {Faker.image.avatar()} alt="" />
  </div>
  <div className="name">
    {Faker.name.firstName()}
  </div>
  <div className="dropdown">
    <RiArrowDropDownLine style = {{fontSize:'25px'}}/>
  </div>


  </div>

</div>

<div className = 'weather-forcast' style = {{height:'30%'}} >
  <h3 style = {{paddingBottom:'20px',paddingLeft:'20px',width:'269px',alignItems:'center'}}>Weather Forecast</h3>

  <div className = 'citys' style = {{padding:'0px'}}>
    <Cards src = {Az} name = 'Arizona'/>
      <Cards src = {Italy} name = 'Italy'/>
     <Cards src = {Paris} name = 'Paris'/>
     <Cards src = {Spain} name = 'Spain'/>
  </div>
</div>


{/* 
<Row wtyle = {{width:'90%'}}>    
  <Col style = {{width:'200px'}} className = 'mini-card'>
   1
  </Col>
  <Col className = 'mini-card'>
   1
  </Col>
  <Col className = 'mini-card'>
   1
  </Col>
  <Col className = 'mini-card'>
   1
  </Col>
  <Col className = 'mini-card'>
   1
  </Col>

</Row> */}
<div className="slider">
<h3 style = {{paddingBottom:'20px',paddingLeft:'20px',width:'269px',alignItems:'center'}}>Buckeye</h3>
<div className="daily-slider">
  <div className="mini-card">
  <div className=""><img src= {Sun} height = '50px' alt="" />
    
    </div>
    12 Tue
  </div>
  <div className="mini-card">
  <div className=""><img src= {Sun} height = '50px' alt="" />
    
    </div>
    12 Tue
  </div>
  <div className="mini-card">
  <div className=""><img src= {Sun} height = '50px' alt="" />
    
    </div>
    12 Tue
  </div>
  <div className="mini-card">
  <div className=""><img src= {Sun} height = '50px' alt="" />
    
    </div>
    12 Tue
  </div>
  <div className="mini-card">
  <div className=""><img src= {Sun} height = '50px' alt="" />
    
    </div>
    12 Tue
  </div>
  <div className="mini-card">
  <div className=""><img src= {Sun} height = '50px' alt="" />
    
    </div>
    12 Tue
  </div>
</div>
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
