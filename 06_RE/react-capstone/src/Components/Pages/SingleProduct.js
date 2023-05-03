import { useState, useEffect } from "react";
import "../../styles/singleproduct.css"

import { productsInfo } from "../productsInfo"
import { cartInfo } from "../cartInfo"

export default function SingleProduct(props) {
    const [count, setCount] = useState(0);
    const [product, setProduct] = useState({});
    const [rating, setRating] = useState();
    const [cart, setCart] = useState(cartInfo);

    useEffect(() => {
      setProduct(
        productsInfo.find(
          (productsInfo) => String(productsInfo.id) === props.match.params.id
        )
      );
    }, [props])

    return (
        <div className="single-product-main">
            <div className="single-product-content">
                <div className="single-product-left">
                    <img className="single-product-image" src={product.image}/>
                </div>
                <div className="single-product-right">
                    <div className="single-product-main-info">
                        <h2 className="single-product-title">{product.title}</h2>
                        <p className="single-product-category">${product.price}</p>
                        <h6 className="single-product-rating">Rating: {product.rating?.rate}</h6>
                        <div className="single-product-cart">
                            <div className="cart-info-container">
                                <div className="cart-counter">
                                    <button className="cart-counter-sub" onClick={() => setCount((count) => count - 1)}>-</button>
                                    <button className="cart-counter-add" onClick={() => setCount((count) => count + 1)}>+</button>
                                </div>
                                <div className="cart-amount-container">
                                    <h5 className="cart-amount">{count}</h5>
                                </div>
                                <div className="cart-button-container">
                                    <button className="cart-button">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-product-description-container">
                        <p className="single-product-description">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}