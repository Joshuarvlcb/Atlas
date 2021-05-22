import { RiArrowDropDownLine } from "react-icons/ri";
import Cards from "./components/Cards.jsx";
import Az from "./assests/az-background.jpg";
import Italy from "./assests/italy-background.jpg";
import Paris from "./assests/paris.bg.jpg";
import Spain from "./assests/spain-bg.jpg";
import React, { useEffect, useState } from "react";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import GuestIcon from "./assests/guest-icon.png";
import Chart from "./components/Chart";
import { BrowserRouter as Router, Switch as S, Route,Link,Redirect } from "react-router-dom";
import weather from './assests/weather.json'
import Settings from './components/Settings'
import HourlySlider from "./components/HourlySlider.jsx";
import DailyCard from './components/DailyCard'
import axios from 'axios'
//We need router to add the ability ro handle routing in react
function App() {

  //api key: 004d873acf1ccd606483135a214f13d1
  //33.468880958416364, -112.0893868131333

  const [newData, setNewData] = useState(weather)
  const [lat, setLat] = useState(33.468880958416364)
  const [lon, setLon] = useState(-112.0893868131333)

  useEffect( () => {
    axios(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=004d873acf1ccd606483135a214f13d1`)
    .then( (response) => {
      setNewData(response.data)
    })
    .catch(error => {
      console.error("error fetching data", error)
    })
  })

  const [cityDaily,setCityDaily] = useState(
    {
        city:'Buckeye',
        country:'United States'
    }
    )

  const [city, setCity] = useState("Buckeye");
  const [activePage, setActivePage] = useState('today')
  const [currSlide, setCurrSlide] = useState(0)
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
  
  
  
  const miniCardData = (temp,day,humidity,wind,icon)=> {
    let data = {temp:temp,day:day,humidity:humidity,wind:wind,icon:icon}
    console.log(data)
    setTemp({temp:data.temp,humidity:humidity,wind:wind,icon:icon})
  }
  
  const data = {
    today: [newData['hourly'][4], newData['hourly'][11], newData['hourly'][16], newData['hourly'][23]],
    hourly: [],
    grabHourly(){
      for(let i = 0; i < 48; i++){
        this.hourly.push(newData['hourly'][i])
      }
    },
    arr:[],
    data:['01d','02d','03d','01n'],
    getDaily(){
      this.data.forEach(curr => {
        for(let i in newData.hourly){
          if(newData.hourly[i].weather[0].icon === curr){
            this.arr.push(newData.hourly[i]);
            break
          }
          
        }
      })
      
    },
    daily: newData['daily'].slice(0, 7),
  }
  
  const [temp,setTemp] = useState({temp:weather['hourly'][4]['temp'],humidity:weather['hourly'][4]['humidity'],wind:weather['hourly'][4]['wind_speed'],icon:'http://openweathermap.org/img/wn/01n@2x.png'})
  
  
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
    console.log(newData);
    cityName(e);
  };

  return (
    <>
      {data.grabHourly()}
      {data.getDaily()}
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

            <div className="daily-card-con" >
              <DailyCard cityDaily={cityDaily} temp={temp} />
            </div>

            <div className="weather-forcast" style={{ height: "30%" }}>
              <h3
                style={{
                  paddingBottom: "20px",
                  paddingLeft: "20px",
                }}
              >
                Weather Forecast
              </h3>

              <div className="citys" style={{ padding: "0px" }}>
                <Cards activeF={activeCity} data={cityData} />
              </div>
            </div>

          

            <Router>
         
            
              <Route path="/chart" component={Chart} />
            
              <Route
                path="/slider"
                component={() => {
                  return (activePage !== "hourly") ? (<Slider miniData = {miniCardData} arr={data[activePage]} city={city} active = {activePage}/>)
                   : (<HourlySlider miniData = {miniCardData} arr = {data['hourly']} city = {city} active = {activePage} currSlide = {currSlide} setCurrSlide = {(val) => {setCurrSlide(val)}}/>);
                }}
                />
                      

                <Redirect to = '/slider'></Redirect>

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
