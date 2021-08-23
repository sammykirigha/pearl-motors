import React, { useState, useEffect } from 'react';
import './Carousel.css'

const Carousel = ({children}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        setLength(children.length) 
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className="carousel">
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {
                    currentIndex > 0 && 
                    <button onClick={prev} className="left-arrow">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                }
                
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                        {children}
                    </div>
                </div>
                {
                    currentIndex < (length - 1) &&
                    <button onClick={next} className="right-arrow">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                }
               
            </div>
            </div>
        </div>
    )
}

export default Carousel
