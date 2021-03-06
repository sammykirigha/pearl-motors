import React from 'react'
import './Carousel.css'
import ten from "../images/ten.png"
import nine from "../images/ford.png"
import five from "../images/rangerover.jpg"


const Carousel = () => {
    return (
        <>
            
 <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators bg-transparent">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item  active " style={{background:`url(${nine})`, backgroundPosition:'center',backgroundSize:"contain" ,backgroundRepeat:"no-repeat"}}>
  
    </div>
    <div class="carousel-item"  style={{background:`url(${five})`, backgroundPosition:'center' ,backgroundSize:"cover" ,backgroundRepeat:"no-repeat"}}>
     
    </div>
    <div class="carousel-item card-3" style={{background:`url(${ten})`, backgroundPosition:'center',backgroundSize:'cover' ,backgroundRepeat:"no-repeat"}}>
    
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
        </>
    )
}

export default Carousel
