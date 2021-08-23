import './App.css';
import Carousel from './components/carousel/Carousel';
import Header from './components/header/Header';
import Cars from './components/products/Cars';


function App() {
  return (
    <div className="container page">
      <Header />
      <Carousel>
        <img src="https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11000947/SALWR2SE4NA201298/08d82aa44f3aad86189c7b3e44e001e7.jpg" alt="placeholder" />
        <img src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/Toyota-Land-Cruiser-Prado-GXL-1001x565.jpg" alt="placeholder" />
        <img src="https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/ford-ranger-wildtrak-my20-upgrade-1001x565-%282%29.png" alt="placeholder" />
      </Carousel>
      <Cars />
    </div>
  );
}

export default App;
