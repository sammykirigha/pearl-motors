import React from 'react'
import './Cars.css'
import {useSelector, useDispatch} from 'react-redux'

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { loadCars } from '../../redux/actions/carsAction'
import { addItem } from '../../redux/actions/CartActions'



const Cars = () => {
    const { cars } = useSelector(state => state.cars)
 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCars())
    
    },[dispatch])

    return (
        <div className="cards">
            {
                cars?.map((car) => (
                    <div className="card" key={car.id}>
                        <div className="image">
                          <img src={car.image1} />
                        </div>
                        <span className="card_features"><strong>Features</strong></span>
                        <div className="card__details">
                            <span className="card_header"><strong>Main Info</strong></span>
                             <div className="features">
                                <span>Make  : <span>{car.CarType}</span> </span>
                                <span>Model : <span>{car.CarType}</span> </span>
                                <span>Milleage  : <span>{car.Mileage}</span> </span>
                                <span>Year of Production :  <span>{car.Year}</span> </span>
                                <span>Price of the car :  <span>Ksh{car.PurchasePrice}</span> </span>
                            </div>
                            <div className="buttons">
                                <Link onClick={() => dispatch(addItem(car))}>Add To Cart</Link>
                                <Link className="link" to={`/details/${car.id}`}>More details</Link>
                            </div> 
                            </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cars
