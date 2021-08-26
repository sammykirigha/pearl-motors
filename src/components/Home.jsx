import React from 'react'
import Cars from './products/Cars';
import Search from './search/Search';
import Carousel from './carousel/Carousel';
import Details from './details/Details';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Search />
            <Cars />
        </div>
    )
}

export default Home
