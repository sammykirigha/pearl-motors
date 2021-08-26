import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadCar } from '../../redux/actions/carsAction';
import'./Cart.css'

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
            
           <div className="checkout-container">
                 <div className="card_inf" style={{background:`url("https://cdn.pixabay.com/photo/2021/02/14/12/13/audi-6014250_960_720.jpg")`,width:"80px",height:"80px", backgroundPosition:'center',backgroundSize:"contain" ,backgroundRepeat:"no-repeat"}}></div>
                   <div className="card_info"><i class="fas fa-angle-left"></i>
                    <span>6</span>
                    <i class="fas fa-angle-right"></i>
                    <span>Price:<span style={{color:'red'}}>28,000,000</span> </span>
                    
                    </div>
                    
            </div>
            <div className="ttprice">
                <span>Total Price: </span>
                <span style={{color:'red' ,fontSize:"15px"}}>28,000,000</span>
                <br/>
                <br/>
                <br/>
                <Link to='/' className="addto">Checkout</Link>
            </div>
            </div>
            
            
    )
}

export default Cart
