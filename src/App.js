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
import GuestIcon from "./assests/guest-icon.png";
import Switch from "react-bootstrap/esm/Switch";
import { FaArrowRight } from "react-icons/fa";
import Chart from "./components/Chart";
import { BrowserRouter as Router, Switch as S, Route } from "react-router-dom";
import weather from './assests/weather.json'
//We need router to add the ability ro handle routing in react
function App() {
  const [city, setCity] = useState("Arizona");
  const [activePage, setActivePage] = useState('today')
  const [cityData, setCityData] = useState([
    {
      id: 1,
      name: "Arizona",
      active: true,
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

  const data = {
    today: [weather['hourly'][4], weather['hourly'][11], weather['hourly'][16], weather['hourly'][22]],
    hourly: [],
    grabHourly(){
      for(let i = 0; i < 48; i++){
        this.hourly.push(weather['hourly'][i])
      }
      console.table(this.hourly)
      console.table(this.today)
      console.table(this.daily)
    },
    daily: weather['daily'].slice(0, 7),
  }

  const [current, setCurrent] = useState(data.today);


  const cityName = (e) => {
    let target;
    if (e.target.textContent) {
      setCity(e.target.textContent);
      target = e.target.textContent;
    } else {
      setCity(e.target.alt);
      target = e.target.alt;
    }

    setCityData(
      cityData.map((obj) => {
        if (obj.name == target) {
          return { ...obj, active: (obj.active = true) };
        } else if (obj.active) {
          return { ...obj, active: !obj.active };
        }
        return target === obj.name ? { ...obj, active: !obj.active } : obj;
      })
    );
  };
  const activeCity = (e) => {
    cityName(e);
  };

  return (
    <>
      {data.grabHourly()}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh", width: "100vw", backgroundColor: "#4FA1CA" }}
      >
        <div className="app-container">
          <Navbar setActive  = {(val) => {setActivePage(val)}}/>
          {/* weather forecast */}

          <div className="forcast-con">
            <div
              className="d-flex justify-content-end align-items-center"
              style={{ width: "95%", height: "20%" }}
            >
              <div className="icon">
                <div className="icon-pic">
                  <img src={GuestIcon} alt="" />
                </div>
                <div className="name">Guest</div>
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
                <Cards activeF={activeCity} data={cityData} />
              </div>
            </div>

            {/* 
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
                <Cards data={cityData} clicked={active} />
              </div>
            </div>

            <div className="details">
              <h5>
                Details more <FaArrowRight style={{ marginLeft: "11px" }} />
              </h5>
            </div>
            <Router>
              <Route path="/chart" component={Chart} />
              <Route
                path="/slider"
                component={() => {
                  return <Slider object={current} city={cityName} />;
                }}
              />
            </Router>
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
          <Slider arr = {data[activePage]} city = {city} active = {activePage}/> 


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
