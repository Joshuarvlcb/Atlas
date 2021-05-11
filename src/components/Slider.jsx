import React from "react";
import MiniCard from "./MiniCard";
import Sun from "../assests/sunny.png";

const Slider = ({ object, city, active }) => {

    const needArrows = () => {
        return (object.length > 7)
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
        {object.map((card, i) => {
          return <MiniCard pic={Sun} height amount = {object.length} className = {`${active}${i}`}/>;
        })}
      </div>
    </div>
  );
};

export default Slider;
