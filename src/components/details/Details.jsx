import React from 'react'
import './Details.css'

import ten from "../images/ten.png"
import nine from "../images/ford.png"
import five from "../images/rangerover.jpg"
import Image from '../image/Image'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadCar } from '../../redux/actions/carsAction'

const Details = () => {
  const { id } = useParams();
  const {car} = useSelector((state) => state.car)
   console.log(car);
  const dispatch = useDispatch()
  

  useEffect(() => {
     dispatch(loadCar(id))
  }, [dispatch])
  
  console.log(id);
  return (
    <div className="details">
      <Image car={car} />
      <div className="card_info">
        <div className='card-details'>
          <div className="div__one">
            <span>Make  : {car.CarType} </span>
            <span>Model : {car.CarType} </span>
            <span>Milleage(km)  : {car.Milleage} </span>
            <span>Year of Production : {car.Year} </span>
            <span>Transimition :  {car.Transmission} </span>
          </div>
          <div className="div__two">
            <span>Car Condition: {car.condition}</span>
            <span>Car Fuel Type: {car.FuelType} </span>
            <span>Engine Size: {car.FuelType}</span>
            <span>Exterior Color: {car.ExteriorColor}</span>
            <span>Interior Color: {car.InteriorColor}</span>
          </div> 
        </div>
      </div>
      <div className="car__info">
        <i class="fas fa-angle-left"></i>
        <span>6</span>
        <i class="fas fa-angle-right"></i>
        <span>Price: </span>
      </div>
      <Link to={`/cart/${car.id}`}>ADD To Cart</Link>
     
      </div>
    )
}

export default Details
