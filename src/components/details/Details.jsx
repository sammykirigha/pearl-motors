import React from 'react'
import './Details.css'

import ten from "../images/ten.png"
import nine from "../images/ford.png"
import five from "../images/rangerover.jpg"

const Details = () => {
    return (
        <>
        <div className="container-details">

            <div className='carousel-detail'>

<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators bg-transparent">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item  active " style={{background:`url(https://cdn.pixabay.com/photo/2016/07/09/21/47/car-1506922__340.jpg)`, backgroundPosition:'center', backgroundSize:"contain" ,backgroundRepeat:"no-repeat"}}>
  
    </div>
    <div class="carousel-item"  style={{background:`url(https://cdn.pixabay.com/photo/2016/04/19/06/03/mercedes-1338063__340.jpg)`, backgroundPosition:'center' ,backgroundSize:"contain" ,backgroundRepeat:"no-repeat"}}>
     
    </div>
    <div class="carousel-item card-3" style={{background:`url(https://cdn.pixabay.com/photo/2016/06/20/22/32/mercedes-benz-1470115__340.jpg)`, backgroundPosition:'center',backgroundSize:'contain' ,backgroundRepeat:"no-repeat"}}>
    
    </div>

 
  
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

        <div className='card-details'>
        <span>Make  : Benz </span>
        <span>Model : 2018 </span>
        <span>Milleage  : 30,000 </span>
        <span>Year of Production : 2011 </span>
        <span>Price of the car :  Ksh1,200,000 </span>
            </div>
        </>
    )
}

export default Details
