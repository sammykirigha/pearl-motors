import React from 'react'
import Cars from './products/Cars';
import Search from './search/Search';
import Carousel from './carousel/Carousel';
import Details from './details/Details';
import Footer from './footer/Footer';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Search />
            <Cars />
            <Footer/>
        </div>
    )
}

export default Home
