import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Detail = ({ activePage }) => {
  const [chart, setChart] = useState(true);

  return (
    <div className="details" style={{ marginRight: "20px" }}>
      <h5
        onClick={() => {
          setChart(!chart);
          console.log(chart);
        }}
      >
        {chart ? (
          <Link to="/chart">
            {" "}
            Details more <FaArrowRight style={{ marginLeft: "0px" }} />
          </Link>
        ) : (
          <Link to="/slider">
            {" "}
            Back to {activePage} <FaArrowRight style={{ marginLeft: "0px" }} />
          </Link>
        )}
      </h5>
    </div>
  );
};
export default Detail;
