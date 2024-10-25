import React from 'react'
import "./Products.css"
import product1 from "../../assets/product1.png"
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";


const products = [
    {
        id: 1,
        image: product1,
        name: "Apple Smart I",
        originalPrice: "$300.00",
        discountedPrice: "$255.00",
    },
    {
        id: 2,
        image: product2,
        name: "Apple Smart II",
        originalPrice: "$300.00",
        discountedPrice: "$250.00",
    },
    {
        id: 3,
        image: product3,
        name: "Apple Smart III",
        originalPrice: "$300.00",
        discountedPrice: "$255.00",
    },
    {
        id: 4,
        image: product4,
        name: "Apple Smart IV",
        originalPrice: "$450.00",
        discountedPrice: "$399.00",
    },
    {
        id: 5,
        image: product5,
        name: "Samsung Watch Pro",
        originalPrice: "$300.00",
        discountedPrice: "$255.00",
    },
    {
        id: 6,
        image: product6,
        name: "Fitbit Max 1",
        originalPrice: "",
        discountedPrice: "$155.00",
    },
];

const productItems = products.map((product) => (
    <div className="product-box" key={product.id}>
        <div className="product-image">
            <img src={product.image} />
        </div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
        </div>
        <div className="product-price">
            <span className="original-price">{product.originalPrice}</span>
            <span className="discounted-price">{product.discountedPrice}</span>
        </div>
    </div>
));
const Products = () => {
  return (
    <main>
        <div className="container">
            <div className="title">
                <p>Find your favourite smart watch.</p>
                <h2>Our Latest Products</h2>
            </div>
            <div className="products">
                {productItems}
            </div>
            <div className="more">
                <button>View More</button>
            </div>
        </div>
    </main>
  )
}

export default Products