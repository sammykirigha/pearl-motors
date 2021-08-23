import React from 'react'
import './Cars.css'
import {useSelector, useDispatch} from 'react-redux'

import { useEffect } from 'react'
import { getCars } from '../redux/actions/carsAction'



const Cars = () => {
    const {cars} = useSelector(state => state.cars)
     
    cars.map(car => console.log(car.CarType))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCars())
    
    },[])

    return (
        <div className="cards">
            {
                cars?.map((car) => (
                <div className="card" key={car.id}>
                    <img src={car.image} />
                    <div className="card__details">
                        <span><strong>Features</strong></span>
                        <div className="features">
                            <span>Make: {car.CarType}</span>
                            <span>Model : {car.CarType}</span>
                            <span>Milleage: {car.Milleage}</span>
                            <span>Year of Production : {car.Year}</span>
                            <span>Price of the car :  ${car.PurchasePrice}</span>
                        </div>
                        <button>Details</button>
                    </div>
                </div>
                ))
            }
    </div>
    )
}

export default Cars
