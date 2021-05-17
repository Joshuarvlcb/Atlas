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
import Cards from './Cards'

const Navbar = ({ setActive, temp, cityDaily, activeNav, activeF, data, showNav, toggleNav }) => {
  return (
    <div className="nav-container" style={{ margin: "0" }}>
      <Header logo={Logo} />

      <Nav
        className="d-flex flex-column justify-content-between"
        style={{ paddingLeft: "25px", height: "30%" }}
      >
        <NavLinks
          name="Today"
          logo={
            <BiHome
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px" }}
            />
          }
          onclick={() => {
            setActive("today")
            if(!showNav) toggleNav()
          }}
        ></NavLinks>

        <NavLinks
          name="Hourly"
          logo={
            <Ri24HoursLine
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px" }}
            />
          }
          onclick={() => {
            setActive("hourly")
            if(!showNav) toggleNav()
          }}
        />
        <NavLinks
          name="Daily"
          logo={
            <BiCalendarWeek
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px" }}
            />
          }
          onclick={() => {
            setActive("daily")
            if(!showNav) toggleNav()
          }}
        />
        <NavLinks
          name="Settings"
          logo={
            <FiSettings
              color="white"
              style={{ paddingRight: "10px", height: "33px", width: "33px" }}
            />
          }
          onclick={() => {
            setActive("settings")
            if(!showNav) toggleNav()
          }}
        />
      </Nav>
      {showNav && 
        <DailyCard cityDaily={cityDaily} temp={temp} />
      }
      
      {activeNav && 
      <div className = "navCities">
        <Cards activeF={activeF} data={data}/>
      </div>}
    </div>
  );
};

export default Navbar;
