import React, {useContext} from 'react'
import { Context } from '../Context'
import {Link} from 'react-router-dom'
import './Header.scss'
import {FaShoppingCart} from 'react-icons/fa'
import {GrCart} from 'react-icons/gr'

function Header() {
    const {cartItems} = useContext(Context);
    const cartIcon = cartItems.length === 0 ? <GrCart/> : <FaShoppingCart/>

    return (
        <div className="header-wrapper">
            <header className="header width-padding">
                <Link to="/"><h1 className="header__title">Pic Some</h1></Link>
                <Link to="/cart">{cartIcon}</Link>
            </header>
        </div>
    )
}

export default Header
