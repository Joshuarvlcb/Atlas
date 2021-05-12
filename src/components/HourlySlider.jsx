import React from 'react'
import MiniCard from './MiniCard'
import Sun from '../assests/sunny.png'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from 'react'
import {ImArrowRight2, ImArrowLeft2} from 'react-icons/im'


const HourlySlider = ({ arr, city, active }) => {

  const [currSlide, setCurrSlide] = useState(0)

  const slides = [arr.slice(0, 6), arr.slice(6, 12), arr.slice(12, 18), arr.slice(18, 24), arr.slice(24, 30), arr.slice(30, 36), arr.slice(36, 42), arr.slice(42)]

  const next = () => {
    setCurrSlide((currSlide === 7) ? 0 : currSlide + 1)
  }

  const back = () => {
    setCurrSlide((currSlide === 0) ? 7 : currSlide - 1)
  }

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
          {slides[currSlide].map( (card, i) => {
            return <MiniCard pic={Sun} temp = {card.temp} text={`${(currSlide) * 6 + i + 1}:00`} key = {`weather${i}`} arr =  {arr}/>
          })}
      </div>
      <div className="buttonContainer">
        <ImArrowLeft2 onClick = {back}/>
        <ImArrowRight2 onClick = {next}/>
      </div>
    </div>)
}

export default HourlySlider
