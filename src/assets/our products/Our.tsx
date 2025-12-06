import { useState } from "react";
import './Our.css'

// PRODUCT IMAGE
import image from "../img/product__img-pls.png";

// Product images import
import product1Img from "../img/dog-food.png";
import product2Img from "../img/camera.png";
import product3Img from "../img/laptop.png";
import product4Img from "../img/product-sett.png";

import product5Img from "../img/electric-car.png";
import product6Img from "../img/boots.png";
import product7Img from "../img/gamepad-big.png";
import product8Img from "../img/jacket2.png";

// ICONS
import likeIcon from "../icons/product__like.png";
import eyeIcon from "../icons/product__eye.png";
import starIcon from "../icons/product__star.png";
import arrowLeft from "../icons/arrow-left.png";
import arrowRight from "../icons/arrow-right.png";

interface ProductType {
    id: number;
    name: string;
    currentPrice: string;
    originalPrice: string;
    image: string;
    ratingCount: string;
}

function Our() {
    const colors = ["red", "blue"];
    const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>({});
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

    // 1️⃣ Birinchi bo‘lim productlari
    const products: ProductType[] = [
        {
            id: 1,
            name: "Breed Dry Dog Food",
            currentPrice: "$260",
            originalPrice: "$360",
            image: product1Img,
            ratingCount: "88",
        },
        {
            id: 2,
            name: "CANON EOS DSLR Camera",
            currentPrice: "$960",
            originalPrice: "$1160",
            image: product2Img,
            ratingCount: "88",
        },
        {
            id: 3,
            name: "ASUS FHD Gaming Laptop",
            currentPrice: "$160",
            originalPrice: "$170",
            image: product3Img,
            ratingCount: "88",
        },
        {
            id: 4,
            name: "Curology Product Set",
            currentPrice: "$260",
            originalPrice: "$360",
            image: product4Img,
            ratingCount: "88",
        },
    ];

    // 2️⃣ Ikkinchi bo‘lim uchun AL0HIDA productlar
    const newProducts: ProductType[] = [
        {
            id: 5,
            name: "Kids Electric Car",
            currentPrice: "$140",
            originalPrice: "$190",
            image: product5Img,
            ratingCount: "65",
        },
        {
            id: 6,
            name: "Jr. Zoom Soccer Cleats",
            currentPrice: "$350",
            originalPrice: "$430",
            image: product6Img,
            ratingCount: "72",
        },
        {
            id: 7,
            name: "GP11 Shooter USB Gamepad",
            currentPrice: "$110",
            originalPrice: "$150",
            image: product7Img,
            ratingCount: "54",
        },
        {
            id: 8,
            name: "Quilted Satin Jacket",
            currentPrice: "$200",
            originalPrice: "$260",
            image: product8Img,
            ratingCount: "81",
        },
    ];

    const handleLike = (p: ProductType) => {
        const liked = JSON.parse(localStorage.getItem("likedProducts") || "[]");
        localStorage.setItem("likedProducts", JSON.stringify([...liked, p]));
        alert(`${p.name} LIKE saxifasiga qowildi`);
    };

    const handleAddToCart = (p: ProductType) => {
        const cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");
        localStorage.setItem("cartProducts", JSON.stringify([...cart, p]));
        alert(`${p.name} CART saxifasiga qowildi`);
    };

    const handleColorSet = (id: number, c: string) => {
        setSelectedColors((prev) => ({ ...prev, [id]: c }));
    };

    const ProductCart = ({ product, showBadge = false }: { product: ProductType; showBadge?: boolean }) => (
        <div className="product__cart" key={product.id}>
            <div className="cart-top">
                {showBadge && (product.id === 5 || product.id === 7) && <span className="badge new">NEW</span>}

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
                    <button className="add__to-cart" onClick={() => handleAddToCart(product)}>
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

            {showBadge && (
                <div className="colors">
                    {colors.map((c) => (
                        <div
                            key={c}
                            className={`color${selectedColors[product.id] === c ? " active" : ""}`}
                            style={{ backgroundColor: c }}
                            onClick={() => handleColorSet(product.id, c)}
                        />
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <>
            <div className="sales">
                <div className="sell-text-spa our-span">
                    <span className="selling-span"></span>
                    <p className="selling-text">This Month</p>
                </div>

                <div className="sales__title">
                    <div className="sales__timer">
                        <h1 className="sales__title-h1">Flash Sales</h1>
                    </div>
                    <div className="sales__title-btn">
                        <button className="title-btn">
                            <img src={arrowLeft} alt="" className="btn-img" />
                        </button>

                        <button className="title-btn">
                            <img src={arrowRight} alt="" className="btn-img" />
                        </button>
                    </div>
                </div>
            </div>

            {/* 1️⃣ Birinchi bo‘lim products */}
            <div className="product__wrapper">
                {products.map((p) => (
                    <ProductCart key={p.id} product={p} />
                ))}
            </div>

            {/* 2️⃣ Ikkinchi bo‘lim alohida products */}
            <div className="product__wrapper">
                {newProducts.map((p) => (
                    <ProductCart key={p.id} product={p} showBadge />
                ))}
            </div>

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

export default Our;
