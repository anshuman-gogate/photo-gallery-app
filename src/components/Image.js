import React, {useContext} from 'react'
import { Context } from '../Context'
import './Image.scss'
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import {GrCart} from 'react-icons/gr'
import { useHover } from '../hooks/useHover' //Custom Hook

function Image({item , className}) {
    const [hovered , ref] = useHover();

    const {toggleFavorite , cartItems , addToCart , removeFromCart} = useContext(Context);

    function heartIcon() {
        if(item.isFavorite) {
            return <AiFillHeart className="heart filled-heart" onClick={() => toggleFavorite(item.id)}/>
        }
        else if(hovered) {
            return <AiOutlineHeart className="heart" onClick={() => toggleFavorite(item.id)}/>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(img => img.id === item.id)
        if(alreadyInCart) {
            return <FaShoppingCart className="cart" onClick={() => removeFromCart(item.id)}/> 
        }
        else if(hovered) {
            return <GrCart className="cart" onClick={() => addToCart(item)}/>
        }
    }

    return (
        <div className={`${className} grid-image-container`} ref={ref}>
            <img src={item.url} alt="" className={"grid-image"}/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

export default Image
