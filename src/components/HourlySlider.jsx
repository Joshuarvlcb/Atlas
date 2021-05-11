import React from 'react'
import MiniCard from './MiniCard'
import Sun from '../assests/sunny.png'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'


const HourlySlider = ({ arr, city, active, miniData }) => {

    const slides = [arr.slice(0, 6), arr.slice(6, 12), arr.slice(12, 18), arr.slice(18, 24), arr.slice(24, 30), arr.slice(30, 36), arr.slice(36, 42), arr.slice(42)]

    return(
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
          <Carousel slide wrap touch interval = '100'>
              {slides.map( (slide, i) => {
                return (<Carousel.Item className = "d-flex justify-content-evenly" key = {`s${i}`} style={{backgroundColor: "rgb(243, 243, 243)"}}>
                    {slide.map( (card, k) => {
                        return <MiniCard pic={Sun} temp = {card.temp} text={`${i}${k}`} key = {`s${i}c${k}`}/>;
                    })}
                </Carousel.Item>)
              })}
              
          </Carousel>
      </div>
    </div>)
}

export default HourlySlider
