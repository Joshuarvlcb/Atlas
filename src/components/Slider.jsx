import React from "react";
import MiniCard from "./MiniCard";
import Sun from "../assests/sunny.png";

const Slider = ({ arr, city, active }) => {

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const needArrows = () => {
        return (arr.length > 7)
    }

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
          return <MiniCard pic={Sun} className = {`${active}${i}`} temp = {(active === 'daily') ? card.temp.day : card.temp} text={days[i]}/>;
        })}
      </div>
    </div>
  );
};

export default Slider;
