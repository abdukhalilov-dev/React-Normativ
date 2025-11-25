import { useState } from "react";
import "./Wishlist.css";
import { Link } from "react-router-dom";

interface ProductType {
    id: number;
    name: string;
    currentPrice: string;
    originalPrice: string;
    image: string;
    ratingCount: string;
}

function Wishlist() {
    const colors = ["red", "blue"];
    const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>({});
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
    const [deleteIds, setDeleteIds] = useState<number[]>([]);

    // TEPA QISIM – SENI O‘Z KODING
    const products: ProductType[] = Array(4)
        .fill({
            name: "Nmadur oyinchoq nmadur",
            currentPrice: "130$",
            originalPrice: "150$",
            image: "./src/assets/img/product__img-pls.png",
            ratingCount: "88",
        })
        .map((p, i) => ({ ...p, id: i + 1 }));

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
                            <img src="./src/assets/img/delete-icon.png" alt="" className="delete-icon" />
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
                        <p className="name-p">{product.name}</p>
                        <div className="product__cost">
                            <p className="current__cost">{product.currentPrice}</p>
                            <p className="original__cost">{product.originalPrice}</p>
                        </div>
                    </div>

                    <div className="product__rating">
                        <img src="./src/assets/icons/product__star.png" alt="star" className="rating-star" />
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
    };

    // ✅ PASTDAGI “JUST FOR YOU” PRODUCTLAR
    const forYouProducts: ProductType[] = [
        {
            id: 1,
            name: "Qanaqadur oyinchoq",
            currentPrice: "900$",
            originalPrice: "1100$",
            image: "./src/assets/img/product__img-pls.png",
            ratingCount: "65",
        },
        {
            id: 2,
            name: "Qanaqadur oyinchoq",
            currentPrice: "900$",
            originalPrice: "1100$",
            image: "./src/assets/img/product__img-pls.png",
            ratingCount: "65",
        },
        {
            id: 3,
            name: "Qanaqadur oyinchoq",
            currentPrice: "900$",
            originalPrice: "1100$",
            image: "./src/assets/img/product__img-pls.png",
            ratingCount: "65",
        },
        {
            id: 4,
            name: "Qanaqadur oyinchoq",
            currentPrice: "900$",
            originalPrice: "1100$",
            image: "./src/assets/img/product__img-pls.png",
            ratingCount: "65",
        },
    ]

    const ForYouProduct = ({ product }: { product: ProductType }) => (
        <div className="product__cart" key={product.id}>
            <div className="cart-top">
                {product.id === 3 && <span className="discount-badge">-35%</span>}

                <div className="product__activates">
                    <div className="eye" onClick={() => setSelectedProduct(product)}>
                        <img src="./src/assets/icons/product__eye.png" alt="" className="eye-icon" />
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
                    <p className="name-p">{product.name}</p>
                    <div className="product__cost">
                        <p className="current__cost">{product.currentPrice}</p>
                        <p className="original__cost">{product.originalPrice}</p>
                    </div>
                </div>

                <div className="product__rating">
                    <img src="./src/assets/icons/product__star.png" alt="star" className="rating-star" />
                    <p className="rating-number">({product.ratingCount})</p>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {/* TEPADAGI WISHLIST — SENGA TEGMAGAN */}

            <div className="top-text-counter">
                <Link
                    to="/sign"
                    className={`count-home ${location.pathname === "/sign" ? "active" : ""}`}
                >
                    Account
                </Link>

                <p className='count-slash'>/</p>

                <Link
                    to="/account"
                    className={`count-home ${location.pathname === "/account" ? "active" : ""}`}
                >
                    My Account
                </Link>

                <p className='count-slash'>/</p>

                <Link
                    to="/wishlist"
                    className={`count-home ${location.pathname === "/wishlist" ? "active" : ""}`}
                >
                    Product
                </Link>

                <p className='count-slash'>/</p>

                <Link
                    to="/counter"
                    className={`count-home ${location.pathname === "/counter" ? "active" : ""}`}
                >
                    View Cart
                </Link>

                <p className='count-slash'>/</p>

                <Link
                    to="/exclusive"
                    className={`count-cart ${location.pathname === "/exclusive" ? "active" : ""}`}
                >
                    CheckOut
                </Link>
            </div>

            <div className="wishlist__top">
                <p className="wishlist__text">Wishlist (4)</p>
                <button className="wishlist__btn">Move All To Bag</button>
            </div>

            <div className="product__wrapper">
                {products.map((p) => (
                    <ProductCart key={p.id} product={p} />
                ))}
            </div>

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
                    ))
                    }
                </div>

            </div>

            {/* Modal */}
            {selectedProduct && (
                <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="modal-close" onClick={() => setSelectedProduct(null)}>
                            ❌
                        </span>
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

export default Wishlist;
