import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, clearItemFromCart} from '../../redux/actions/CartActions';
import'./Cart.css'

const Cart = () => {

    const [amount, setAmount] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [payable, setPayable] = useState(0);
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    const calculatePrice = () => {
        const amount = cartItems.reduce((value, acc) => {
            return value + (acc.PurchasePrice * acc.quantity)
        }, 0)
        setAmount(amount);
        calculateDiscount();
    }

    const getItems = () => {
        const items = cartItems.reduce((acc, value) => acc + value.quantity, 0)
        return items;
    }

    const calculateDiscount = () => {
        if (getItems() >= 5 || cartItems.length > 4) {
            setDiscount(0.05 * amount)
            setPayable(amount - discount)
        } else {
            setDiscount(0)
        }
    }

    useEffect(() => {
        getItems();
        calculatePrice();
    }, [cartItems, amount])

    return (
        <div className="details">
            {cartItems.map(cartItem => (
                <div className="checkout-container">
                    <div className="card_inf" style={{ background: `url(${cartItem.image2})`, width: "200px", height: "150px", backgroundPosition: 'center', backgroundSize: "contain", backgroundRepeat: "no-repeat", objectFit: "contain" }}></div>
                    <div className="card_info">
                        <i class="fas fa-angle-left" onClick={() => dispatch(removeItem(cartItem))}></i>
                        <span>{cartItem.quantity}</span>
                        <i class="fas fa-angle-right" onClick={() => dispatch(addItem(cartItem))}></i>
                        <div onClick={() => dispatch(clearItemFromCart(cartItem))} >&#10005;</div>
                        <span>Price:<span style={{ color: 'red' }}>{cartItem.PurchasePrice}</span> </span>
                        <span>SubTotalPrice:<span style={{ color: 'red' }}>{cartItem.PurchasePrice * cartItem.quantity}</span> </span>
                    </div>

                </div>
            ))}
           
            <div className="ttprice">
                <span>Total Price: Ksh {payable}</span>
                <span style={{color:'red' ,fontSize:"15px"}}></span>
                <br/>
                <br/>
            </div>
            </div>
            
            
    )
}

export default Cart
