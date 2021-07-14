import React, {useContext , useState}  from 'react'
import { Context } from '../Context'
import './CartItems.scss'
import CartItem from './CartItem';

function CartItems() {
    // Button text
    const [btntext , setBtnText] = useState('Place Order');
    const {cartItems , setCartItems} = useContext(Context);

    const message = cartItems.length === 0 ? "Select Images to proceed" : "Continue to checkout"
    const allCartItems = cartItems.map(item => {
        return <CartItem key={item.id} item={item}/>
    })

    const cartTotal = cartItems.length * 5.99;

    // Function to place order
    function placeOrder() {
        setBtnText('Placing Order........');
        setTimeout(() => {
            setBtnText('Place Order')
            setCartItems([]); // For now it just waits for 3 sec and clears the cart
        } , 3000)
    }

    return (
        <div className="cart-items">
            <h1 className="cart-items__title">{message}</h1>
            <div className="all-cart-items">
                {allCartItems}
            </div>
            {cartItems.length !== 0 && 
                <h3 className="cart-total">Total : {cartTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</h3>
            }
            {cartItems.length !== 0 && 
                <button className="place-order-btn" onClick={placeOrder}>{btntext}</button>
            }
        </div>
    )
}

export default CartItems
