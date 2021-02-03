import React, { useEffect, useState } from 'react'

import SpeedometerImg from '../assets/images/speed.png'
import '../assets/styles/speedometer.css'

const Speedometer = () => {

  const [speed, setSpeed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(speed => speed >= 100 ? 0 : speed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="gauge">
        <div className="gauge__body">
          <div className="gauge__fill" style={{transform: `rotate(${(speed/100)/2}turn)`}}/>
          <div className="gauge__cover"/>
        </div>
      </div>
      <img src={SpeedometerImg} alt="speedometer" className="meter"/>
      <div className="reading">
        {speed}
        <span className="metric">kmh</span>
      </div>
    </div>
  )
}

export default Speedometer
