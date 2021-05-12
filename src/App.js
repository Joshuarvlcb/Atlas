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
import { FaArrowRight } from "react-icons/fa";
import Chart from "./components/Chart";
import { BrowserRouter as Router, Switch as S, Route } from "react-router-dom";
import weather from './assests/weather.json'
import Settings from './components/Settings'
import HourlySlider from "./components/HourlySlider.jsx";
//We need router to add the ability ro handle routing in react
function App() {
  const [cityDaily,setCityDaily] = useState(
    {
        city:'Buckeye',
        country:'United States'
    }
    )


  const [city, setCity] = useState("Buckeye");
  const [temp,setTemp] = useState({temp:105,humidity:70,wind:20})
  const [activePage, setActivePage] = useState('today')
  const [cityData, setCityData] = useState([
    {
      id: 1,
      name: "Buckeye",
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
      name: "Venice",
      active: false,
      src: Italy,
    },
    {
      id: 4,
      name: "Madrid",
      active: false,
      src: Spain,
    },
  ]);



  const miniCardData = (temp,day,humidity,wind)=> {
    let data = {temp:temp,day:day,humidity:humidity,wind:wind}
    console.log(data)
    setTemp({temp:data.temp,humidity:humidity,wind:wind})
  }

  const data = {
    today: [weather['hourly'][4], weather['hourly'][11], weather['hourly'][16], weather['hourly'][22]],
    hourly: [],
    grabHourly(){
      for(let i = 0; i < 48; i++){
        this.hourly.push(weather['hourly'][i])
      }
      // console.table(this.hourly)
      // console.table(this.today)
      // console.table(this.daily)
    },
    daily: weather['daily'].slice(0, 7),
  }



  const cityName = (e) => {
    let target;
    if (e.target.textContent) {
      setCity(e.target.textContent);
      target = e.target.textContent;
    } else {
      setCity(e.target.alt);
      target = e.target.alt;
    }
    let country

    switch(target){
      case 'Paris':
        country = 'France'
        break
      case 'Buckeye':
        country = 'United States'
        break
      case  'Venice':
        country = 'Italy'
        break
      case  'Madrid':
        country = 'Spain'
        break

    }
    console.log(country)
    setCityDaily({
      city:target,
      country:country
    })
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
          <Navbar cityDaily = {cityDaily} temp = {temp} setActive  = {(val) => {setActivePage(val)}}/>
          {/* weather forecast */}

        {(activePage !== "settings") ? (<div className="forcast-con">
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
                  return (activePage !== "hourly") ? (<Slider miniData = {miniCardData} arr={data[activePage]} city={city} active = {activePage}/>)
                   : (<HourlySlider miniData = {miniCardData} arr = {data['hourly']} city = {city} active = {activePage}/>);
                }}
              />
            </Router> 
             
            </div>) : <Settings/>}
          

           
          </div>


          



        {/* <Row >

  <Col className = 'd-flex justify-content-end align-items-center' style = {{height:'50px'}}>ICON</Col>

</Row> */}
        </div>
    </>
  );
}

export default App;
