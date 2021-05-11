import React from "react";
import { Nav } from "react-bootstrap";
import NavLinks from "./NavLinks";
import Header from "./Header";
import DailyCard from "./DailyCard";
import { BiHome } from "react-icons/bi";
import { Ri24HoursLine } from "react-icons/ri";
import { BiCalendarWeek } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import Logo from "../assests/weather-logo.png";

const Navbar = ({ currentData }) => {
  return (
    <div className="nav-container" style={{ margin: "0" }}>
      <Header logo={Logo} />

      <Nav
        className="d-flex flex-column justify-content-between"
        style={{ paddingLeft: "25px", height: "30%" }}
      >
        <NavLinks
          currentData={currentData}
          name="Today"
          logo={
            <BiHome
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px" }}
            />
          }
        >
          {" "}
          <div onClick={currentData}></div>{" "}
        </NavLinks>

        <NavLinks
          currentData={currentData}
          onClick={() => console.log("hi")}
          name="Hourly"
          logo={
            <Ri24HoursLine
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px" }}
            />
          }
        />

        <NavLinks
          currentData={currentData}
          name="Daily"
          logo={
            <BiCalendarWeek
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px" }}
            />
          }
        ></NavLinks>

        <NavLinks
          name="Settings"
          logo={
            <FiSettings
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px" }}
            />
          }
        />
      </Nav>
      <DailyCard />
    </div>
  );
};

export default Navbar;
