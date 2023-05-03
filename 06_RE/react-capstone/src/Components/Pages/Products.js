import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/products.css";

import { productsInfo } from "../productsInfo";

export default function Products(props) {
  const [searchCategory, setSearchCategory] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [filters, setFilters] = useState({
    men: true,
    jewelery: false,
    electronics: false,
    women: true
  });

  useEffect(
    () => {    
      if (
        filters["men"] === false &&
        filters["jewelery"] === false &&
        filters["electronics"] === false &&
        filters["women"] === false
      ) {
        setSearchCategory([]);
        setSearchCategory(productsInfo);
        console.log(searchCategory);
      }
      if (
        filters["men"] === true &&
        filters["jewelery"] === true &&
        filters["electronics"] === true &&
        filters["women"] === true
      ) {
        setSearchCategory([]);
        setSearchCategory(productsInfo);
        console.log(searchCategory);
      }
      if (
        filters["men"] === false &&
        filters["jewelery"] === true &&
        filters["electronics"] === true &&
        filters["women"] === true
      ) {
        setProductsFiltered([], [], []);
        productsFiltered[0] = productsInfo.filter(
          (product) => product.category === "jewelery"
        );
        productsFiltered[1] = productsInfo.filter(
          (product) => product.category === "electronics"
        );
        productsFiltered[2] = productsInfo.filter(
          (product) => product.category === "women's clothing"
        );
        console.log("1)")
        console.log(productsFiltered)
        console.log("2)")
        productsFiltered[0].push(...productsFiltered[1])
        console.log(productsFiltered)
        console.log("3)")
        productsFiltered[0].push(...productsFiltered[2])
        console.log(productsFiltered)
        console.log("4)")
        setSearchCategory(productsFiltered[0])
      }
      if (
        filters["men"] === true &&
        filters["jewelery"] === true &&
        filters["electronics"] === true &&
        filters["women"] === false
      ) {
        setProductsFiltered([], [], []);
        productsFiltered[0] = productsInfo.filter(
          (product) => product.category === "men's clothing"
        );
        productsFiltered[1] = productsInfo.filter(
          (product) => product.category === "jewelery"
        );
        productsFiltered[2] = productsInfo.filter(
          (product) => product.category === "electronics"
        );
        console.log("1)")
        console.log(productsFiltered)
        console.log("2)")
        productsFiltered[0].push(...productsFiltered[1])
        console.log(productsFiltered)
        console.log("3)")
        productsFiltered[0].push(...productsFiltered[2])
        console.log(productsFiltered)
        console.log("4)")
        setSearchCategory(productsFiltered[0])
      }
      if (
        filters["men"] === true &&
        filters["jewelery"] === true &&
        filters["electronics"] === false &&
        filters["women"] === true
      ) {
        setProductsFiltered([], [], []);
        productsFiltered[0] = productsInfo.filter(
          (product) => product.category === "men's clothing"
        );
        productsFiltered[1] = productsInfo.filter(
          (product) => product.category === "jewelery"
        );
        productsFiltered[2] = productsInfo.filter(
          (product) => product.category === "women's clothing"
        );
        console.log("1)")
        console.log(productsFiltered)
        console.log("2)")
        productsFiltered[0].push(...productsFiltered[1])
        console.log(productsFiltered)
        console.log("3)")
        productsFiltered[0].push(...productsFiltered[2])
        console.log(productsFiltered)
        console.log("4)")
        setSearchCategory(productsFiltered[0])
      }
      if (
        filters["men"] === true &&
        filters["jewelery"] === false &&
        filters["electronics"] === true &&
        filters["women"] === true
      ) {
        setProductsFiltered([], [], []);
        productsFiltered[0] = productsInfo.filter(
          (product) => product.category === "men's clothing"
        );
        productsFiltered[1] = productsInfo.filter(
          (product) => product.category === "electronics"
        );
        productsFiltered[2] = productsInfo.filter(
          (product) => product.category === "women's clothing"
        );
        console.log("1)")
        console.log(productsFiltered)
        console.log("2)")
        productsFiltered[0].push(...productsFiltered[1])
        console.log(productsFiltered)
        console.log("3)")
        productsFiltered[0].push(...productsFiltered[2])
        console.log(productsFiltered)
        console.log("4)")
        setSearchCategory(productsFiltered[0])
      }
      if (
        filters["men"] === false &&
        filters["jewelery"] === false &&
        filters["electronics"] === true &&
        filters["women"] === true
      ) {
        setProductsFiltered([], []);
        productsFiltered[0] = productsInfo.filter(
          (product) => product.category === "electronics"
        );
        productsFiltered[1] = productsInfo.filter(
          (product) => product.category === "women's clothing"
        );
        console.log("1)")
        console.log(productsFiltered)
        console.log("2)")
        productsFiltered[0].push(...productsFiltered[1])
        console.log(productsFiltered)
        console.log("3)")
        setSearchCategory(productsFiltered[0])
      }
      if (
        filters["men"] === false &&
        filters["jewelery"] === true &&
        filters["electronics"] === true &&
        filters["women"] === false
      ) {
        setProductsFiltered([], []);
        productsFiltered[0] = productsInfo.filter(
          (product) => product.category === "jewelery"
        );
        productsFiltered[1] = productsInfo.filter(
          (product) => product.category === "electronics"
        );
        console.log("1)")
        console.log(productsFiltered)
        console.log("2)")
        productsFiltered[0].push(...productsFiltered[1])
        console.log(productsFiltered)
        console.log("3)")
        setSearchCategory(productsFiltered[0])
      }
      if (
        filters["men"] === true &&
        filters["jewelery"] === true &&
        filters["electronics"] === false &&
        filters["women"] === false
      ) {
        setProductsFiltered([], []);
        productsFiltered[0] = productsInfo.filter(
          (product) => product.category === "men's clothing"
        );
        productsFiltered[1] = productsInfo.filter(
          (product) => product.category === "jewelery"
        );
        console.log("1)")
        console.log(productsFiltered)
        console.log("2)")
        productsFiltered[0].push(...productsFiltered[1])
        console.log(productsFiltered)
        console.log("3)")
        setSearchCategory(productsFiltered[0])
      }
      if (
        filters["men"] === true &&
        filters["jewelery"] === false &&
        filters["electronics"] === false &&
        filters["women"] === true
      ) {
        setProductsFiltered([], []);
        productsFiltered[0] = productsInfo.filter(
          (product) => product.category === "men's clothing"
        );
        productsFiltered[1] = productsInfo.filter(
          (product) => product.category === "women's clothing"
        );
        console.log("1)")
        console.log(productsFiltered)
        console.log("2)")
        productsFiltered[0].push(...productsFiltered[1])
        console.log(productsFiltered)
        console.log("3)")
        setSearchCategory(productsFiltered[0])
      }
      if (
        filters["men"] === true &&
        filters["jewelery"] === false &&
        filters["electronics"] === true &&
        filters["women"] === false
      ) {
        setProductsFiltered([], []);
        productsFiltered[0] = productsInfo.filter(
          (product) => product.category === "men's clothing"
        );
        productsFiltered[1] = productsInfo.filter(
          (product) => product.category === "electronics"
        );
        console.log("1)")
        console.log(productsFiltered)
        console.log("2)")
        productsFiltered[0].push(...productsFiltered[1])
        console.log(productsFiltered)
        console.log("3)")
        setSearchCategory(productsFiltered[0])
      }
      if (
        filters["men"] === false &&
        filters["jewelery"] === true &&
        filters["electronics"] === false &&
        filters["women"] === true
      ) {
        setProductsFiltered([], []);
        productsFiltered[0] = productsInfo.filter(
          (product) => product.category === "jewelery"
        );
        productsFiltered[1] = productsInfo.filter(
          (product) => product.category === "women's clothing"
        );
        console.log("1)")
        console.log(productsFiltered)
        console.log("2)")
        productsFiltered[0].push(...productsFiltered[1])
        console.log(productsFiltered)
        console.log("3)")
        setSearchCategory(productsFiltered[0])
      }
      if (
        filters["men"] === false &&
        filters["jewelery"] === false &&
        filters["electronics"] === false &&
        filters["women"] === true
      ) {
        setSearchCategory(
          productsInfo.filter(
            (product) => product.category === "women's clothing"
          )
        );
      }
      if (
        filters["men"] === false &&
        filters["jewelery"] === false &&
        filters["electronics"] === true &&
        filters["women"] === false
      ) {
        setSearchCategory(
          productsInfo.filter(
            (product) => product.category === "electronics"
          )
        );
        console.log(searchCategory);
      }
      if (
        filters["men"] === false &&
        filters["jewelery"] === true &&
        filters["electronics"] === false &&
        filters["women"] === false
      ) {
        setSearchCategory(
          productsInfo.filter(
            (product) => product.category === "jewelery"
          )
        );
        console.log(searchCategory);
      }
      if (
        filters["men"] === true &&
        filters["jewelery"] === false &&
        filters["electronics"] === false &&
        filters["women"] === false
      ) {
        setSearchCategory(
          productsInfo.filter((product) => product.category === "men's clothing")
        );
        console.log(searchCategory);
      }
    },
    [],
    500
  );

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
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Alphabet: A-Z</option>
              <option>Alphabet: Z-A</option>
            </select>
            <div className="filter-selection">
              <div className="category-container">
                <input type="checkbox" />
                <p className="category-name">All</p>
              </div>
              <div className="category-container">
                <input type="checkbox" />
                <p className="category-name">Electronics</p>
              </div>
              <div className="category-container">
                <input type="checkbox" />
                <p className="category-name">Jewelry</p>
              </div>
              <div className="category-container">
                <input type="checkbox" />
                <p className="category-name">Men's Clothing</p>
              </div>
              <div className="category-container">
                <input type="checkbox" />
                <p className="category-name">Women's Clothing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-inventory-main-container">
        <div className="products-inventory-content-container">
          {searchCategory.map((sc) => {
            return (
              <div className="item-main-container" key={sc.id}>
                <NavLink to={"/product/" + sc.id}>
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
                              <h6 className="item-rating-number">
                                Rating: {sc["rating"].rate}
                              </h6>
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ********************************************************
// 02. Manually create conditionals, new state "productsFiltered", push and spread functions with console.logs, NO checkboxes working

// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import "../../styles/products.css";

// import { productsInfo } from "../productsInfo";

// export default function Products(props) {
//   const [searchCategory, setSearchCategory] = useState([]);
//   const [productsFiltered, setProductsFiltered] = useState([]);
//   const [filters, setFilters] = useState({
//     men: true,
//     jewelery: false,
//     electronics: false,
//     women: true
//   });

//   useEffect(
//     () => {    
//       if (
//         filters["men"] === false &&
//         filters["jewelery"] === false &&
//         filters["electronics"] === false &&
//         filters["women"] === false
//       ) {
//         setSearchCategory([]);
//         setSearchCategory(productsInfo);
//         console.log(searchCategory);
//       }
//       if (
//         filters["men"] === true &&
//         filters["jewelery"] === true &&
//         filters["electronics"] === true &&
//         filters["women"] === true
//       ) {
//         setSearchCategory([]);
//         setSearchCategory(productsInfo);
//         console.log(searchCategory);
//       }
//       if (
//         filters["men"] === false &&
//         filters["jewelery"] === true &&
//         filters["electronics"] === true &&
//         filters["women"] === true
//       ) {
//         setProductsFiltered([], [], []);
//         productsFiltered[0] = productsInfo.filter(
//           (product) => product.category === "jewelery"
//         );
//         productsFiltered[1] = productsInfo.filter(
//           (product) => product.category === "electronics"
//         );
//         productsFiltered[2] = productsInfo.filter(
//           (product) => product.category === "women's clothing"
//         );
//         console.log("1)")
//         console.log(productsFiltered)
//         console.log("2)")
//         productsFiltered[0].push(...productsFiltered[1])
//         console.log(productsFiltered)
//         console.log("3)")
//         productsFiltered[0].push(...productsFiltered[2])
//         console.log(productsFiltered)
//         console.log("4)")
//         setSearchCategory(productsFiltered[0])
//       }
//       if (
//         filters["men"] === true &&
//         filters["jewelery"] === true &&
//         filters["electronics"] === true &&
//         filters["women"] === false
//       ) {
//         setProductsFiltered([], [], []);
//         productsFiltered[0] = productsInfo.filter(
//           (product) => product.category === "men's clothing"
//         );
//         productsFiltered[1] = productsInfo.filter(
//           (product) => product.category === "jewelery"
//         );
//         productsFiltered[2] = productsInfo.filter(
//           (product) => product.category === "electronics"
//         );
//         console.log("1)")
//         console.log(productsFiltered)
//         console.log("2)")
//         productsFiltered[0].push(...productsFiltered[1])
//         console.log(productsFiltered)
//         console.log("3)")
//         productsFiltered[0].push(...productsFiltered[2])
//         console.log(productsFiltered)
//         console.log("4)")
//         setSearchCategory(productsFiltered[0])
//       }
//       if (
//         filters["men"] === true &&
//         filters["jewelery"] === true &&
//         filters["electronics"] === false &&
//         filters["women"] === true
//       ) {
//         setProductsFiltered([], [], []);
//         productsFiltered[0] = productsInfo.filter(
//           (product) => product.category === "men's clothing"
//         );
//         productsFiltered[1] = productsInfo.filter(
//           (product) => product.category === "jewelery"
//         );
//         productsFiltered[2] = productsInfo.filter(
//           (product) => product.category === "women's clothing"
//         );
//         console.log("1)")
//         console.log(productsFiltered)
//         console.log("2)")
//         productsFiltered[0].push(...productsFiltered[1])
//         console.log(productsFiltered)
//         console.log("3)")
//         productsFiltered[0].push(...productsFiltered[2])
//         console.log(productsFiltered)
//         console.log("4)")
//         setSearchCategory(productsFiltered[0])
//       }
//       if (
//         filters["men"] === true &&
//         filters["jewelery"] === false &&
//         filters["electronics"] === true &&
//         filters["women"] === true
//       ) {
//         setProductsFiltered([], [], []);
//         productsFiltered[0] = productsInfo.filter(
//           (product) => product.category === "men's clothing"
//         );
//         productsFiltered[1] = productsInfo.filter(
//           (product) => product.category === "electronics"
//         );
//         productsFiltered[2] = productsInfo.filter(
//           (product) => product.category === "women's clothing"
//         );
//         console.log("1)")
//         console.log(productsFiltered)
//         console.log("2)")
//         productsFiltered[0].push(...productsFiltered[1])
//         console.log(productsFiltered)
//         console.log("3)")
//         productsFiltered[0].push(...productsFiltered[2])
//         console.log(productsFiltered)
//         console.log("4)")
//         setSearchCategory(productsFiltered[0])
//       }
//       if (
//         filters["men"] === false &&
//         filters["jewelery"] === false &&
//         filters["electronics"] === true &&
//         filters["women"] === true
//       ) {
//         setProductsFiltered([], []);
//         productsFiltered[0] = productsInfo.filter(
//           (product) => product.category === "electronics"
//         );
//         productsFiltered[1] = productsInfo.filter(
//           (product) => product.category === "women's clothing"
//         );
//         console.log("1)")
//         console.log(productsFiltered)
//         console.log("2)")
//         productsFiltered[0].push(...productsFiltered[1])
//         console.log(productsFiltered)
//         console.log("3)")
//         setSearchCategory(productsFiltered[0])
//       }
//       if (
//         filters["men"] === false &&
//         filters["jewelery"] === true &&
//         filters["electronics"] === true &&
//         filters["women"] === false
//       ) {
//         setProductsFiltered([], []);
//         productsFiltered[0] = productsInfo.filter(
//           (product) => product.category === "jewelery"
//         );
//         productsFiltered[1] = productsInfo.filter(
//           (product) => product.category === "electronics"
//         );
//         console.log("1)")
//         console.log(productsFiltered)
//         console.log("2)")
//         productsFiltered[0].push(...productsFiltered[1])
//         console.log(productsFiltered)
//         console.log("3)")
//         setSearchCategory(productsFiltered[0])
//       }
//       if (
//         filters["men"] === true &&
//         filters["jewelery"] === true &&
//         filters["electronics"] === false &&
//         filters["women"] === false
//       ) {
//         setProductsFiltered([], []);
//         productsFiltered[0] = productsInfo.filter(
//           (product) => product.category === "men's clothing"
//         );
//         productsFiltered[1] = productsInfo.filter(
//           (product) => product.category === "jewelery"
//         );
//         console.log("1)")
//         console.log(productsFiltered)
//         console.log("2)")
//         productsFiltered[0].push(...productsFiltered[1])
//         console.log(productsFiltered)
//         console.log("3)")
//         setSearchCategory(productsFiltered[0])
//       }
//       if (
//         filters["men"] === true &&
//         filters["jewelery"] === false &&
//         filters["electronics"] === false &&
//         filters["women"] === true
//       ) {
//         setProductsFiltered([], []);
//         productsFiltered[0] = productsInfo.filter(
//           (product) => product.category === "men's clothing"
//         );
//         productsFiltered[1] = productsInfo.filter(
//           (product) => product.category === "women's clothing"
//         );
//         console.log("1)")
//         console.log(productsFiltered)
//         console.log("2)")
//         productsFiltered[0].push(...productsFiltered[1])
//         console.log(productsFiltered)
//         console.log("3)")
//         setSearchCategory(productsFiltered[0])
//       }
//       if (
//         filters["men"] === true &&
//         filters["jewelery"] === false &&
//         filters["electronics"] === true &&
//         filters["women"] === false
//       ) {
//         setProductsFiltered([], []);
//         productsFiltered[0] = productsInfo.filter(
//           (product) => product.category === "men's clothing"
//         );
//         productsFiltered[1] = productsInfo.filter(
//           (product) => product.category === "electronics"
//         );
//         console.log("1)")
//         console.log(productsFiltered)
//         console.log("2)")
//         productsFiltered[0].push(...productsFiltered[1])
//         console.log(productsFiltered)
//         console.log("3)")
//         setSearchCategory(productsFiltered[0])
//       }
//       if (
//         filters["men"] === false &&
//         filters["jewelery"] === true &&
//         filters["electronics"] === false &&
//         filters["women"] === true
//       ) {
//         setProductsFiltered([], []);
//         productsFiltered[0] = productsInfo.filter(
//           (product) => product.category === "jewelery"
//         );
//         productsFiltered[1] = productsInfo.filter(
//           (product) => product.category === "women's clothing"
//         );
//         console.log("1)")
//         console.log(productsFiltered)
//         console.log("2)")
//         productsFiltered[0].push(...productsFiltered[1])
//         console.log(productsFiltered)
//         console.log("3)")
//         setSearchCategory(productsFiltered[0])
//       }
//       if (
//         filters["men"] === false &&
//         filters["jewelery"] === false &&
//         filters["electronics"] === false &&
//         filters["women"] === true
//       ) {
//         setSearchCategory(
//           productsInfo.filter(
//             (product) => product.category === "women's clothing"
//           )
//         );
//       }
//       if (
//         filters["men"] === false &&
//         filters["jewelery"] === false &&
//         filters["electronics"] === true &&
//         filters["women"] === false
//       ) {
//         setSearchCategory(
//           productsInfo.filter(
//             (product) => product.category === "electronics"
//           )
//         );
//         console.log(searchCategory);
//       }
//       if (
//         filters["men"] === false &&
//         filters["jewelery"] === true &&
//         filters["electronics"] === false &&
//         filters["women"] === false
//       ) {
//         setSearchCategory(
//           productsInfo.filter(
//             (product) => product.category === "jewelery"
//           )
//         );
//         console.log(searchCategory);
//       }
//       if (
//         filters["men"] === true &&
//         filters["jewelery"] === false &&
//         filters["electronics"] === false &&
//         filters["women"] === false
//       ) {
//         setSearchCategory(
//           productsInfo.filter((product) => product.category === "men's clothing")
//         );
//         console.log(searchCategory);
//       }
//     },
//     [],
//     500
//   );

//   return (
//     <div className="product-main-container">
//       <div className="search-main-container">
//         <div className="search-main-content-container">
//           <div className="search-bar-container">
//             <input className="search-bar" type="text" />
//             <button className="search-button">Search</button>
//           </div>
//           <div className="filter-container">
//             <select className="sort-selection">
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Alphabet: A-Z</option>
//               <option>Alphabet: Z-A</option>
//             </select>
//             <div className="filter-selection">
//               <div className="category-container">
//                 <input type="checkbox" />
//                 <p className="category-name">All</p>
//               </div>
//               <div className="category-container">
//                 <input type="checkbox" />
//                 <p className="category-name">Electronics</p>
//               </div>
//               <div className="category-container">
//                 <input type="checkbox" />
//                 <p className="category-name">Jewelry</p>
//               </div>
//               <div className="category-container">
//                 <input type="checkbox" />
//                 <p className="category-name">Men's Clothing</p>
//               </div>
//               <div className="category-container">
//                 <input type="checkbox" />
//                 <p className="category-name">Women's Clothing</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="products-inventory-main-container">
//         <div className="products-inventory-content-container">
//           {searchCategory.map((sc) => {
//             return (
//               <div className="item-main-container" key={sc.id}>
//                 <NavLink to={"/product/" + sc.id}>
//                   <div className="item-content-container">
//                     <div className="item-content-container-left">
//                       <img className="item-content-image" src={sc.image} />
//                     </div>
//                     <div className="item-content-container-right">
//                       <div className="item-content-container-right-content">
//                         <div className="item-container-content-top">
//                           <div className="item-title-category-rating-container">
//                             <div className="item-content-title">
//                               <h4 className="item-title">{sc.title}</h4>
//                               <p className="item-category">{sc.category}</p>
//                               <h6 className="item-rating-number">
//                                 Rating: {sc["rating"].rate}
//                               </h6>
//                             </div>
//                           </div>
//                           <div className="item-content-price">
//                             <p className="item-dollar-sign">$</p>
//                             <h4 className="item-price">{sc.price}</h4>
//                           </div>
//                         </div>
//                         <div className="item-container-content-bottom">
//                           <div className="item-description-container">
//                             <p className="item-description">{sc.description}</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </NavLink>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
