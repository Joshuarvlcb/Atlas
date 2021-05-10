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

const Navbar = ({ setActive }) => {
  return (
    <div className="nav-container" style={{ margin: "0" }}>
      <Header logo={Logo} />

      <Nav
        className="d-flex flex-column"
        style={{ paddingLeft: "25px", height: "205px" }}
      >
        <NavLinks
          name="Today"
          logo={
            <BiHome
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px" }}
            />
          }
          onclick = {() => setActive('today')}
        />
        <NavLinks
          name="Hourly"
          logo={
            <Ri24HoursLine
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px" }}
            />
          }
          onclick = {() => setActive('hourly')}
        />
        <NavLinks
          name="Daily"
          logo={
            <BiCalendarWeek
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px" }}
            />
          }
          onclick = {() => setActive('daily')}
        />
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
