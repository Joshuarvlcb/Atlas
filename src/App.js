import { RiArrowDropDownLine } from "react-icons/ri";
import Faker from "faker";
import Cards from "./components/Cards.jsx";
import Az from "./assests/az-background.jpg";
import Italy from "./assests/italy-background.jpg";
import Paris from "./assests/paris.bg.jpg";
import Spain from "./assests/spain-bg.jpg";
import React, { useState } from "react";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import weather from './assests/weather.json'

function App() {

  console.table(weather.hourly)

  const [active, setActive] = useState('today')
  const [city, setCity] = useState("Buckeye");
  const [cityData, setCityData] = useState([
    {
      id: 1,
      name: "Arizona",
      active: false,
      src: Az,
    },
    {
      id: 2,
      name: "Paris",
      active: false,
      src: Paris,
    },
    {
      id: 3,
      name: "Italy",
      active: false,
      src: Italy,
    },
    {
      id: 4,
      name: "Spain",
      active: false,
      src: Spain,
    },
  ]);

  

  const currentCity = (e) => {
    if (e.target.textContent) {
      setCity(e.target.textContent);
      e.target.className = "active";
    } else setCity(e.target.alt);
  };

  const data = {
    today: [6, 13, 17, 21],
    hourly: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],
    daily: weather.daily,
  }

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh", width: "100vw", backgroundColor: "#4FA1CA" }}
      >
        <div className="app-container">
          <Navbar setActive  = {(val) => {setActive(val)}} />
          {/* weather forecast */}

          <div className="forcast-con">
            <div
              className="d-flex justify-content-end align-items-center"
              style={{ width: "95%", height: "20%" }}
            >
              <div className="icon">
                <div className="icon-pic">
                  <img src={Faker.image.avatar()} alt="" />
                </div>
                <div className="name">{Faker.name.firstName()}</div>
                <div className="dropdown">
                  <RiArrowDropDownLine style={{ fontSize: "30px" }} />
                </div>
              </div>
            </div>

            <div className="weather-forcast" style={{ height: "30%" }}>
              <h3
                style={{
                  paddingBottom: "20px",
                  paddingLeft: "20px",
                  width: "269px",
                  alignItems: "center",
                }}
              >
                Weather Forecast
              </h3>

              <div className="citys" style={{ padding: "0px" }}>
                <Cards activeF={currentCity} data={cityData} />
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
          <Slider object = {data[active]} city = {city} active = {active}/> 

          {/* <Row >

  <Col className = 'd-flex justify-content-end align-items-center' style = {{height:'50px'}}>ICON</Col>

</Row> */}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
