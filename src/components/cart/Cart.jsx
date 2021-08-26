import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadCar } from '../../redux/actions/carsAction';
import Image from '../image/Image';

const Cart = () => {
    const { id } = useParams();
    const { car } = useSelector((state) => state.car)
    console.log(car);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(loadCar(id))
    }, [dispatch])

    return (
        <div className="details">
            <Image car={car} />
            <div className="card_info">
                    <i class="fas fa-angle-left"></i>
                    <span>6</span>
                    <i class="fas fa-angle-right"></i>
                    <span>Price: </span>
            </div>
            <span>Total Price: </span>
                <Link to={`/cart/${car.id}`}>ADD To Cart</Link>
            </div>
    )
}

export default Cart
