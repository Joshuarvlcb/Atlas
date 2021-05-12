import React from "react";
import MiniCard from "./MiniCard";
import Sun from "../assests/sunny.png";
const Slider = ({ arr, city, active ,miniData}) => {

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="slider">
      <h3
        style={{
          paddingBottom: "20px",
          paddingLeft: "20px",
          width: "269px",
          alignItems: "center",
        }}
      >
        {city}
      </h3>
      <div className="daily-slider">
        {arr.map((card, i) => {
          return <MiniCard  key = {`weather${i}`} arr = {arr} miniData = {miniData} pic={`http://openweathermap.org/img/wn/${card.weather[0].icon}@2x.png`} className = {`${active}${i}`} page = {active} temp = {(active === 'daily') ? card.temp.day : card.temp} daily = {{h:card.humidity,t:card.temp.day,day:[days[i]], w:card.wind_speed,}}  text={days[i]}/>;
        })}
      </div>
    </div>
  );
};

export default Slider;
