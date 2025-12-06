import { useState } from "react";
import "./Wishlist.css";
import { Link } from "react-router-dom";

// Rasmlarni import qilish
import productImg from "/src/assets/img/product__img-pls.png";
import deleteIcon from "/src/assets/img/delete-icon.png";
import starIcon from "/src/assets/icons/product__star.png";
import eyeIcon from "/src/assets/icons/product__eye.png";


// Product images import
import product1Img from "../img/gucci-bag.png";
import product2Img from "../img/cooler.png";
import product3Img from "../img/gamepad-big.png";
import product4Img from "../img/jacket.png";

import product5Img from "../img/laptop.png";
import product6Img from "../img/kompyuter.png";
import product7Img from "../img/product__img-pls.png";
import product8Img from "../img/klaviatura.png";

interface ProductType {
    id: number;
    name: string;
    currentPrice: string;
    originalPrice: string;
    image: string;
    ratingCount?: number;
}

function Wishlist() {
    const colors = ["red", "blue"];
    const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>({});
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
    const [deleteIds, setDeleteIds] = useState<number[]>([]);

    // Wishlist mahsulotlar
    const products: ProductType[] = [
        {
            id: 1,
            name: "Gucci duffle bag",
            currentPrice: "$260",
            originalPrice: "$360",
            image: product1Img,
        },
        {
            id: 2,
            name: "RGB liquid CPU Cooler",
            currentPrice: "$960",
            originalPrice: "$1160",
            image: product2Img,
        },
        {
            id: 3,
            name: "GP11 Shooter USB Gamepad",
            currentPrice: "$160",
            originalPrice: "$170",
            image: product3Img,
        },
        {
            id: 4,
            name: "Quilted Satin Jacket",
            currentPrice: "$260",
            originalPrice: "$360",
            image: product4Img,
        },
    ];

    const handleAddToCart = (p: ProductType) => {
        const cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");
        localStorage.setItem("cartProducts", JSON.stringify([...cart, p]));
        alert(`${p.name} CART saxifasiga qoshildi`);
    };

    const handleColorSet = (id: number, c: string) => {
        setSelectedColors((prev) => ({ ...prev, [id]: c }));
    };

    const handleDelete = (id: number) => {
        setDeleteIds((prev) => [...prev, id]);
    };

    const ProductCart = ({ product, showBadge = false }: { product: ProductType; showBadge?: boolean }) => {
        const isDeleted = deleteIds.includes(product.id);
        if (isDeleted) {
            return (
                <div className="product__cart" key={product.id}>
                    <p className="empty">empty</p>
                </div>
            );
        }

        return (
            <div className="product__cart" key={product.id}>
                <div className="cart-top">
                    {product.id === 1 && <span className="discount-badge">-35%</span>}

                    <div className="product__activates">
                        <div className="delete" onClick={() => handleDelete(product.id)}>
                            <img src={deleteIcon} alt="" className="delete-icon" />
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
                        <p className="selling-name">{product.name}</p>
                        <div className="product__cost">
                            <p className="current__cost">{product.currentPrice}</p>
                            <p className="original__cost">{product.originalPrice}</p>
                        </div>
                    </div>

                    <div className="product__rating">
                        
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
    };

    // Just For You mahsulotlar
    const forYouProducts: ProductType[] = [
        {
            id: 1,
            name: "ASUS FHD Gaming Laptop",
            currentPrice: "900$",
            originalPrice: "1100$",
            image: product5Img,
        },
        {
            id: 2,
            name: "IPS LCD Gaming Monitor",
            currentPrice: "900$",
            originalPrice: "1100$",
            image: product6Img,
        },
        {
            id: 3,
            name: "HAVIT HV-G92 Gamepad",
            currentPrice: "900$",
            originalPrice: "1100$",
            image: product7Img,
        },
        {
            id: 4,
            name: "AK-900 Wired Keyboard",
            currentPrice: "900$",
            originalPrice: "1100$",
            image: product8Img,
        },
    ];

    const ForYouProduct = ({ product }: { product: ProductType }) => (
        <div className="product__cart" key={product.id}>
            <div className="cart-top">
                {product.id === 3 && <span className="discount-badge">-35%</span>}

                <div className="product__activates">
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
                    <p className="selling-name">{product.name}</p>
                    <div className="product__cost">
                        <p className="current__cost">{product.currentPrice}</p>
                        <p className="original__cost">{product.originalPrice}</p>
                    </div>
                </div>

                <div className="product__rating">
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Top Breadcrumb */}
            <div className="top-text-counter">
                <Link to="/sign" className={`count-home ${window.location.pathname === "/sign" ? "active" : ""}`}>
                    Account
                </Link>
                <p className="count-slash">/</p>
                <Link to="/contact" className={`count-home ${window.location.pathname === "/contact" ? "active" : ""}`}>
                    Contact
                </Link>
                <p className="count-slash">/</p>
                <Link to="/account" className={`count-home ${window.location.pathname === "/account" ? "active" : ""}`}>
                    My Account
                </Link>
                <p className="count-slash">/</p>
                <Link to="/wishlist" className={`count-home ${window.location.pathname === "/wishlist" ? "active" : ""}`}>
                    Product
                </Link>
                <p className="count-slash">/</p>
                <Link to="/counter" className={`count-home ${window.location.pathname === "/counter" ? "active" : ""}`}>
                    View Cart
                </Link>
                <p className="count-slash">/</p>
                <Link to="/exclusive" className={`count-cart ${window.location.pathname === "/exclusive" ? "active" : ""}`}>
                    CheckOut
                </Link>
                <p className="count-slash">/</p>
                <Link to="/gaming" className={`count-cart ${window.location.pathname === "/gaming" ? "active" : ""}`}>
                    Gaming
                </Link>
            </div>

            {/* Wishlist Top */}
            <div className="wishlist__top">
                <p className="wishlist__text">Wishlist (4)</p>
                <button className="wishlist__btn">Move All To Bag</button>
            </div>

            {/* Wishlist Products */}
            <div className="product__wrapper wishlist-bottom">
                {products.map((p) => (
                    <ProductCart key={p.id} product={p} />
                ))}
            </div>

            {/* Just For You */}
            <div className="for-you-section">
                <div className="for-you-header">
                    <div className="arrival-span-text">
                        <span className="arrival-span">.</span>
                        <p className="arrival-p">Just For You</p>
                    </div>
                    <div className="btn-for-you">
                        <button className="wishlist__btn">See All</button>
                    </div>
                </div>

                <div className="product__wrapper">
                    {forYouProducts.map((p) => (
                        <ForYouProduct key={p.id} product={p} />
                    ))}
                </div>
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
                    </div>
                </div>
            )}
        </>
    );
}

export default Wishlist;
