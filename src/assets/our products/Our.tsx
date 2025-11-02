import { useState } from "react";
import './Our.css'


interface ProductType {
    id: number;
    name: string;
    currentPrice: string;
    originalPrice: string;
    image: string;
    ratingCount: string;
}

function Our() {
    const colors = ["red", "blue"]
    const [selectedColors, setSelectedColors] = useState<{ [key: number]: string }>({})
    const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null)

    const products: ProductType[] = Array(4).fill({
        name: "Nmadur oyinchoq nmadur",
        currentPrice: "130$",
        originalPrice: "150$",
        image: "./src/assets/img/product__img-pls.png",
        ratingCount: "88",
    }).map((p, i) => ({ ...p, id: i + 1 }))

    const handleLike = (p: ProductType) => {
        const liked = JSON.parse(localStorage.getItem("likedProducts") || "[]")
        localStorage.setItem("likedProducts", JSON.stringify([...liked, p]))
        alert(`${p.name} LIKE saxifasiga qowildi`)
    }


    const handleAddToCart = (p: ProductType) => {
        const cart = JSON.parse(localStorage.getItem("cartProducts") || "[]")
        localStorage.setItem("cartProducts", JSON.stringify([...cart, p]))
        alert(`${p.name} CART saxifasiga qowildi`)
    }

    const handleColorSet = (id: number, c: string) => {
        setSelectedColors((prev) => ({ ...prev, [id]: c }))
    }

    const ProductCart = ({ product, showBadge = false }: { product: ProductType; showBadge?: boolean }) => (
        <div className="product__cart" key={product.id}>
            <div className="cart-top">
                {showBadge && (product.id === 1 || product.id === 3) && <span className="badge new">NEW</span>}

                <div className="product__activates">
                    <div className="like" onClick={() => handleLike(product)}>
                        <img src="./src/assets/icons/product__like.png" alt="" className="like-icon" />
                    </div>

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
    )

    return (
        <>
            <div className="sales">
                <div className="sales-top">
                    <span className="sales__top-span"></span>
                    <p className="sales__top-p">Today's</p>
                </div>

                <div className="sales__title">
                    <div className="sales__timer">
                        <h1 className="sales__title-h1">Flash Sales</h1>
                    </div>
                    <div className="sales__title-btn">
                        <button className="title-btn">
                            <img src="./src/assets/icons/arrow-left.png" alt="" className="btn-img" />
                        </button>

                        <button className="title-btn">
                            <img src="./src/assets/icons/arrow-right.png" alt="" className="btn-img" />
                        </button>
                    </div>
                </div>
            </div>


            <div className="product__wrapper">
                {products.map((p) => (
                    < ProductCart key={p.id} product={p} />
                ))}
            </div>


            <div className="product__wrapper">
                {products.map((p) => (
                    < ProductCart key={p.id} product={p} showBadge />
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
    )

}

export default Our