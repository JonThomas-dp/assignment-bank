import { useState, useEffect } from "react";
import "../../styles/cart.css";

import { productsInfo } from "../productsInfo"
import { cartInfo } from "../cartInfo"

export default function Cart(props) {
    const [cart, setCart] = useState(cartInfo);

    return (
        <div className="cart-main-container">
            <h1 className="cart-main-title">Your Cart</h1>
            <div className="cart-main-content-container">
                <div className="cart-header-container">
                    <div className="cart-item-content-container">
                        <div className="trash-bin-container">
                        </div>
                        <div className="cart-item-header-container">
                        </div>
                        <div className="cart-item-title-container">
                        </div>
                        <div className="cart-item-quantity-container">
                            <h6 className="cart-item-quantity-header">Quantity</h6>
                        </div>
                        <div className="cart-item-individual-price-container">
                                <h6 className="cart-item-individual-price">Price</h6>
                        </div>
                        <div className="cart-item-subtotal-container">
                            <h6 className="cart-item-subtotal">Subtotal</h6>
                        </div>
                    </div>
                </div>
                {cart.map((c) => {
                    return( 
                        <div className="cart-item-container">
                            <div className="cart-item-content-container">
                                <div className="trash-bin-container">
                                    trash
                                </div>
                                <div className="cart-item-image-container">
                                    <img className="cart-item-image" src={c.image}/>
                                </div>
                                <div className="cart-item-title-container">
                                    <h5 className="cart-item-title">{c.title}</h5>
                                </div>
                                <div className="cart-item-quantity-container">
                                    <h5 className="cart-item-quantity">{c.quantity}</h5>
                                </div>
                                <div className="cart-item-individual-price-container">
                                        <h5 className="cart-item-individual-price">{c.price}</h5>
                                </div>
                                <div className="cart-item-subtotal-container">
                                    <h5 className="cart-item-subtotal">{c.price * c.quantity}</h5>
                                </div>
                            </div>
                        </div>
                    )
                    })}                
                <div className="cart-footer-container">
                    <div className="cart-item-content-container">
                        <div className="trash-bin-container">
                        </div>
                        <div className="cart-item-header-container">
                        </div>
                        <div className="cart-item-title-container">
                        </div>
                        <div className="cart-item-quantity-container">
                        </div>
                        <div className="cart-item-individual-price-container">
                            <h5 className="cart-item-individual-total">Total</h5>
                        </div>
                        <div className="cart-item-subtotal-container">
                            <h5 className="cart-item-subtotal">351.68</h5>
                        </div>
                        <div className="checkout-button-container">
                            <button className="checkout-button">Check Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}