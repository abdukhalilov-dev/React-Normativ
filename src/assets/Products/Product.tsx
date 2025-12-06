import { useState } from "react";
import "./Product.css";

import productImg from "../img/product__img-pls.png";
import KlaviaturaImg from "../img/klaviatura.png";
import KompyuterImg from "../img/kompyuter.png";
import ChairImg from "../img/chair.png";
import SecondChairImg from "../img/chair.png";

import likeIcon from "../icons/product__like.png";
import eyeIcon from "../icons/product__eye.png";
import starIcon from "../icons/product__star.png";

interface ProductType {
    id: number;
    name: string;
    currentPrice: string;
    originalPrice: string;
    image: string;
    ratingCount: string;
}

function Product() {
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

    const products: ProductType[] = [
        {
            id: 1,
            name: "HAVIT HV-G92 Gamepad",
            currentPrice: "$120",
            originalPrice: "$160",
            image: productImg,
            ratingCount: "88",
        },
        {
            id: 2,
            name: "AK-900 Wired Keyboard",
            currentPrice: "$960",
            originalPrice: "$1160",
            image: KlaviaturaImg,
            ratingCount: "75",
        },
        {
            id: 3,
            name: "IPS LCD Gaming Monitor",
            currentPrice: "$370",
            originalPrice: "$400",
            image:  KompyuterImg,
            ratingCount: "99",
        },
        {
            id: 4,
            name: "S-Series Comfort Chair ",
            currentPrice: "$374",
            originalPrice: "$400",
            image: ChairImg,
            ratingCount: "99",
        },
        {
            id: 5,
            name: "S-Series Comfort Chair",
            currentPrice: "$375",
            originalPrice: "$400",
            image: SecondChairImg,
            ratingCount: "99",
        },
    ];

    const handleLike = (product: ProductType) => {
        let liked = JSON.parse(localStorage.getItem("likedProducts") || "[]");
        liked.push(product);
        localStorage.setItem("likedProducts", JSON.stringify(liked));
        alert(`${product.name} LIKE saxifasiga qowildi`);
    };

    const handleAddToCart = (product: ProductType) => {
        let cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");
        cart.push(product);
        localStorage.setItem("cartProducts", JSON.stringify(cart));
        alert(`${product.name} CART saxifasiga qowildi`);
    };

    return (
        <>
            <div className="product__wrapper">
                {products.map((product) => (
                    <div className="product__cart" key={product.id}>
                        <div className="cart-top">
                            <span className="product__span">-40%</span>

                            <div className="product__activates">
                                <div className="like" onClick={() => handleLike(product)}>
                                    <img src={likeIcon} alt="" className="like-icon" />
                                </div>

                                <div className="eye" onClick={() => setSelectedProduct(product)}>
                                    <img src={eyeIcon} alt="" className="eye-icon" />
                                </div>
                            </div>

                            <div className="product__img">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="cart-btn">
                                <button
                                    className="add__to-cart"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>

                        <div className="cart__bottom">
                            <div className="product__name-price">
                                <p className="product-name">{product.name}</p>
                                <div className="product__cost">
                                    <p className="current__cost">{product.currentPrice}</p>
                                    <p className="original__cost">{product.originalPrice}</p>
                                </div>
                            </div>

                            <div className="product__rating">
                                <img src={starIcon} alt="star" className="rating-star" />
                                <p className="rating-number">({product.ratingCount})</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProduct && (
                <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="modal-close" onClick={() => setSelectedProduct(null)}>❌</span>
                        <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-img" />
                        <h2 className="modal-name">{selectedProduct.name}</h2>
                        <p className="modal-text">Current Price: {selectedProduct.currentPrice}</p>
                        <p className="modal-text">Original Price: {selectedProduct.originalPrice}</p>
                        <p className="modal-text">Rating: {selectedProduct.ratingCount}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Product;
