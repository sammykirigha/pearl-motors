import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="nav">
                <span>Pearl Motors</span>
                <div className="nav__search">
                    <i class="fas fa-search"></i>
                    <input type="search" placeholder="search for more cars..." />
                </div>
                <div className="nav__right">
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>
        </div>
    )
}

export default Header
