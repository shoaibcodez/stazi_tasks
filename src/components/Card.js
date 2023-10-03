import React from 'react'
import { BsFillPeopleFill, BsSpeedometer, BsHeart } from "react-icons/bs";
import { BiGasPump } from "react-icons/bi";
import { PiSteeringWheelBold } from "react-icons/pi";

const Card = ({ card }) => {
    let iconStyles = { color: "#6499E9", fontSize: "1em" };
    return (
        <div className='card'>
            <div className='cardImg'><img src={card.img} alt="" /></div>
            <div className='cardHero'>
                <h3>{card.name}</h3>
                <span style={{ border: '2px dotted skyblue', borderRadius: '10px', padding: '5px 8px' }} >{card.year}</span>
            </div>
            <div className='cardDetails'>
                <span > <BsFillPeopleFill style={iconStyles} /> 4 People</span>
                <span><BiGasPump style={iconStyles} /> {card.fuel}</span>
                <span><BsSpeedometer style={iconStyles} /> {card.mileage}km / 1-litre</span>
                <span><PiSteeringWheelBold style={iconStyles} /> Automatic</span>
            </div>
            <div className='cardPrice'>
                <span>
                    <h3>{card.price}</h3>
                    <p>/month</p>
                </span>
                <span>
                    <BsHeart style={iconStyles} />
                    <button>Rent now</button>
                </span>
            </div>
        </div>
    )
}

export default Card