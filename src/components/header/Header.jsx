import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { Link } from 'react-router-dom';
import {selectCartItemsCount} from '../../redux/CartSelectors'
import './Header.css'

const Header = ({itemCount}) => {
    return (
        <div className="header">
            <div className="nav">
                <span>Pearl Motors</span>
                <div className="nav__search">
                    <i class="fas fa-search"></i>
                    <input type="search" placeholder="search for more cars..." />
                </div>
                <div className="nav__right">
                    <Link to='/'>Home</Link>
                    <Link to={`/cart`}>
                    <i class="fas fa-shopping-cart"></i>
                    <span>{itemCount}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
   itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, null)(Header);
