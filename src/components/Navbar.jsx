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

const Navbar = ({ setActive, active }) => {
  return (
    <div className="nav-container" style={{ margin: "0" }}>
      <Header logo={Logo} />

      <Nav
        className="d-flex flex-column justify-content-between"
        style={{ paddingLeft: "25px", height: "205px" }}
      >
        <NavLinks
          active = {(active === 'today')}
          name="Today"
          logo={
            <BiHome
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px"}}
            />
          }
        onclick = {() => setActive('today')}
        >
        </NavLinks>

        <NavLinks
          active = {(active === 'hourly')}
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
          active = {(active === 'daily')}
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
          onclick = {() => setActive('settings')}
        />
      </Nav>
      <DailyCard />
    </div>
  );
};

export default Navbar;
