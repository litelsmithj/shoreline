import React, {useRef} from 'react'
import { AiOutlineLeft, AiOutlineShopping, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'
import { urlFor } from '../lib/client'
import { useStateContext } from '../context/StateContext'

const Cart = () => {
    const cartRef = useRef()
    // const {totalQuantities, totalPrice, cartItems, setShowCart, toggleCartItemQuantity, onRemove} = useStateContext()
    const {totalQuantities, totalPrice, cartItems, setShowCart} = useStateContext()

    return (
        <div className='cart-wrapper' ref={cartRef}>
        <div className='cart-container'>
            <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
            <AiOutlineLeft/>
            <span className='heading'>Your cart</span>
            <span className='cart-num-items'>({totalQuantities} items)</span>
            </button>

            {cartItems.length < 1 && (
            <div className='empty-cart'>
                <AiOutlineShopping size={150}/>
                <h3>Your shopping cart is empty</h3>
                <button type = 'button' onClick = {()=> setShowCart(false)} className='btn'>
                Continue Shopping
                </button>
            </div>
            )}

            <div className='products-container'>
            {cartItems.length >= 1 && cartItems.map((item) => (
                <div className='product' key={item._id}>
                <img src={urlFor(item?.image[0])} className='cart-product-image'/>
                <div className='item-desc'>
                    <div className='flex top'>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                    </div>
                    <div className='flex bottom'>
                    <div>
                        <p className='quantity-desc'>
                        {/* <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                            <AiOutlineMinus/>
                        </span> */}
                        <span className='minus'>
                            <AiOutlineMinus/>
                        </span>
                        <span className='num'>
                            {item.quantity}
                        </span>
                        {/* <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                            <AiOutlinePlus/>
                        </span> */}
                        <span className='plus'>
                            <AiOutlinePlus/>
                        </span>
                        </p>
                    </div>
                    {/* <button type='button' className='remove-item' onClick={()=> onRemove(item)}>
                        <TiDeleteOutline/>
                    </button> */}
                    <button type='button' className='remove-item'>
                        <TiDeleteOutline/>
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
            {cartItems.length >=1 && (
            <div className='cart-bottom'>
                <div className='total'>
                <h3>Subtotal: </h3>
                <h3>${totalPrice}</h3>
                </div>
                <div className='btn-container'>
                {/* <button type='button' className='btn' onClick={handleCheckout}>
                    Pay with Stripe
                </button> */}
                <button type='button' className='btn'>
                    Pay with Stripe
                </button>
                </div>
            </div>
            )}
        </div>
    </div>
    )
}

export default Cart