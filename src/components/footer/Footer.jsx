import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <>
      <div className="footer-div">        
               
<footer class="page-footer font-small special-color-dark pt-4">


  <div class="container">

    
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
        <i class="fa fa-phone" aria-hidden="true" style={{color:'white'}}> +254712584549/+254707256013</i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
        <i class="fa fa-envelope" aria-hidden="true" style={{color:'white'}}> pearlMotors@gmail.com</i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
        <i class="fas fa-location"  style={{color:'white', textDecoration:'none'}}> Nyeri , Kenya </i> 
        </a>
      </li>
  
     
    </ul>


  </div>

  <div class="container">

    
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <i class="fab fa-facebook-f" style={{color:'white'}}> PearlMotors  </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fab fa-twitter" style={{color:'white'}}> PearlMotors </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-gplus mx-1">
          <i class="fab fa-google-plus-g" style={{color:'white'}}> PearlMotors </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-li mx-1">
          <i class="fab fa-linkedin-in" style={{color:'white'}}> PearlMotors </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <i class="fab fa-dribbble" style={{color:'white'}} > PearlMotors </i>
        </a>
      </li>
    </ul>


  </div>
  
  <div class="footer-copyright text-center py-3" style={{color:'white'}}>© 2021 Copyright:
    <a href="https://mdbootstrap.com/"><span className="pearlfooter" style={{color:'white' ,textDecoration:'none'}}>PearlMotors</span></a>
  </div>
 

</footer>

</div> 

            </>
        )
    }
}
