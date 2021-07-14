import React, {useContext} from 'react'
import { Context } from '../Context'
import {BsTrash} from 'react-icons/bs'
import {BsTrashFill} from 'react-icons/bs'
import {useHover} from '../hooks/useHover'
import './CartItem.scss'

function CartItem({item}) {
    const [hovered , ref] = useHover();
    const {removeFromCart} = useContext(Context);

    return (
        <div className="cart-item">
            <button className="trash-btn" ref={ref}>
            {hovered ? 
                <BsTrashFill onClick={() => removeFromCart(item.id)}/> 
                : 
                <BsTrash/>
            }
            </button>
            <img src={item.url} alt="" />
            <p className="priceInfo">$5.99</p>
        </div>
    )
}

export default CartItem
