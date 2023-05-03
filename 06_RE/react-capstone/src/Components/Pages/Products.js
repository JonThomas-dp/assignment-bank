import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/products.css"

import { productsInfo } from "../productsInfo"

export default function Products(props) {   
    const [searchCategory, setSearchCategory] = useState([])
    const [filter, setFilter] = useState(
    {
        men: false,
        women: false,
        electronics: false,
        jewelery: false
    }
    )

    useEffect(() => {
        if(filter["men"] === false && filter["women"] === false && filter["electronics"] === false && filter["jewelery"] === false) {
            setSearchCategory(productsInfo)
            console.log(searchCategory)
        }
        if(filter["electronics"] === true){
            setSearchCategory(productsInfo.filter(product => product.category === "electronics"))
        }
        if(filter["men"] === true){
            setSearchCategory(productsInfo.filter(product => product.category === "men's clothing"))
        }
        if(filter["women"] === true){
            setSearchCategory(productsInfo.filter(product => product.category === "women's clothing"))
        }
        if(filter["jewelery"] === true){
            setSearchCategory(productsInfo.filter(product => product.category === "jewelery"))
        }
        console.log(searchCategory)
    }, [checkHandler])

    function checkHandler() {
        setFilter(!filter.electronics)
        console.log(filter)
    }

    return (
        <div className="product-main-container">
            <div className="search-main-container">
                <div className="search-main-content-container">
                    <div className="search-bar-container">
                        <input className="search-bar" type="text" />
                        <button className="search-button">Search</button>
                    </div>
                    <div className="filter-container">
                        <select className="sort-selection">
                            <option >Price: Low to High</option>
                            <option >Price: High to Low</option>
                            <option >Alphabet: A-Z</option>
                            <option >Alphabet: Z-A</option>
                        </select>
                        <div className="filter-selection">
                            <div className="category-container"><input type="checkbox" /><p className="category-name">All</p></div>
                            <div className="category-container"><input type="checkbox" checked={filter.electronics} onChange={checkHandler}/><p className="category-name">Electronics</p></div>
                            <div className="category-container"><input type="checkbox" /><p className="category-name">Jewelry</p></div>
                            <div className="category-container"><input type="checkbox" /><p className="category-name">Men's Clothing</p></div>
                            <div className="category-container"><input type="checkbox" /><p className="category-name">Women's Clothing</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-inventory-main-container">
                <div className="products-inventory-content-container">
                    {searchCategory.map((sc) => {
                        return (
                            <div className="item-main-container" key={sc.id}>
                                <NavLink to={'/product/' + sc.id}>
                                <div className="item-content-container">
                                    <div className="item-content-container-left">
                                        <img className="item-content-image" src={sc.image} />
                                    </div>
                                    <div className="item-content-container-right">
                                        <div className="item-content-container-right-content">
                                            <div className="item-container-content-top">
                                                <div className="item-title-category-rating-container">
                                                    <div className="item-content-title">
                                                        <h4 className="item-title">{sc.title}</h4>
                                                        <p className="item-category">{sc.category}</p>
                                                        <h6 className="item-rating-number">Rating: {sc["rating"].rate}</h6>
                                                    </div>
                                                </div>
                                                <div className="item-content-price">
                                                    <p className="item-dollar-sign">$</p>
                                                    <h4 className="item-price">{sc.price}</h4>
                                                </div>
                                            </div>
                                            <div className="item-container-content-bottom">
                                                <div className="item-description-container">
                                                    <p className="item-description">{sc.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        )  
}              