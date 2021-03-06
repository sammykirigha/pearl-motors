import React, { Fragment } from 'react'
import './Details.css'

import ten from "../images/ten.png"
import nine from "../images/ford.png"
import five from "../images/rangerover.jpg"
import Image from '../image/Image'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadCar } from '../../redux/actions/carsAction'
import Footer from '../footer/Footer'
import { addItem } from '../../redux/actions/CartActions'

const Details = () => {
  const { id } = useParams();
  const { car } = useSelector((state) => state.car)
  const  quantity = useSelector((state) => state.cartItems)

  console.log(quantity)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadCar(id))
  }, [dispatch])
  
  return (
    
  <div className="container-details">

     <div className="carousel-details">
      <div className="carousel-details" style={{width:'500px', height:'300px'}}>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators bg-transparent">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> 
      </div>
       <div class="carousel-inner">
         <div class="carousel-item  active " style={{background:`url(${car.image2})`, backgroundPosition:'center',backgroundSize:"contain" ,backgroundRepeat:"no-repeat"}}></div>
              <div class="carousel-item" style={{ background: `url("${car.image3}")`, backgroundPosition:'center' ,backgroundSize:"contain" ,backgroundRepeat:"no-repeat"}}></div>
              <div class="carousel-item card-3" style={{ background: `url("${car.image3}")`, backgroundPosition:'center',backgroundSize:'cortain' ,backgroundRepeat:"no-repeat"}}></div>
       </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
     </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
   </div>
</div>


  <div className="detai" style={{width:'500px', height:'350px' ,padding:"20px"}}>
      {/* <Image car={car} />
      <div className="card">
        <div className='card-de'> */}
          <div className="div_one">
            <span>Make  : {car.CarType} </span>
            <span>Model : {car.CarType} </span>
            <span>Milleage  : {car.Mileage} </span>
            <span>Year of Production : {car.Year} </span>
            <span>Transimition :  {car.Transmission} </span>
          </div>
          <div className="div_two">
            <span>Car Condition: {car.condition}</span>
            <span>Car Fuel Type: {car.FuelType} </span>
            <span>Engine Size: {car.FuelType}</span>
            <span>Exterior Color: {car.ExteriorColor}</span>
            <span>Interior Color: {car.InteriorColor}</span>
          </div> 
        {/* </div>
      </div> */}
 
      </div> 
      
 
      <div className="carinfo">
        <br/>
        <br/>
        <i class="fas fa-angle-left"></i>
        
        <span></span>
        
        <i onClick={() => dispatch(addItem(car)) } class="fas fa-angle-right"></i>
        <br />
        <br />
        <br />
        <div >&#10005;</div>
        <span className="price">Price: {car.PurchasePrice}</span>
        
        <br/>
        <br/>
        <br/>
        <Link to={`/cart/${car.id}`} className="addto" style={{ marginTop: '200px'}}>ADD To Cart</Link>
      </div> 
      <div className="footer">
      <Footer/>
      </div>
      
      
 
      </div>

      
    )
}

export default Details
