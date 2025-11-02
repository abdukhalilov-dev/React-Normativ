import { useState } from "react";
import './Selling.css'

interface ProductType {
    id: number;
    name: string;
    currentPrice: string;
    originalPrice: string;
    image: string;
    ratingCount: string;
}

function Selling() {
      const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  
      const products: ProductType[] = [
          {
              id: 1,
              name: "The north coat",
              currentPrice: "$260",
              originalPrice: "$360",
              image: "./src/assets/img/our__products-jacket.png",
              ratingCount: "88",
          },
          {
              id: 2,
              name: "Gucci duffle bag",
              currentPrice: "$960",
              originalPrice: "$1160",
              image: "./src/assets/img/product__img-pls.png",
              ratingCount: "88",
          },
          {
              id: 3,
              name: "RGB liquid CPU Cooler",
              currentPrice: "$160",
              originalPrice: "$170",
              image: "./src/assets/img/product__img-pls.png",
              ratingCount: "88",
          },
          {
              id: 4,
              name: "Small BookSelf",
              currentPrice: "$260",
              originalPrice: "$360",
              image: "./src/assets/img/product__img-pls.png",
              ratingCount: "88",
          },
      ];
  
      const handleLike = (product: ProductType) => {
          let liked = JSON.parse(localStorage.getItem("likedProducts") || "[]");
          liked.push(product)
          localStorage.setItem("likedProducts", JSON.stringify(liked))
          alert(`${product.name} LIKE saxifasiga qowildi`)
      }
  
      const handleAddToCart = (product: ProductType) => {
          let cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");
          cart.push(product)
          localStorage.setItem("cartProducts", JSON.stringify(cart))
          alert(`${product.name} CART saxifasiga qowildi`)
      };

    return (
        <>
            <div className="selling__span-btn">
                <div className="span-text">
                    <div className="sell-text-spa">
                        <span className="selling-span"></span>
                        <p className="selling-text">This Month</p>
                    </div>
                    <h1 className="text-sell">Best Selling Products</h1>
                </div>

                <div className="selling-btn">
                    <button className="top-btn">View All</button>
                </div>
            </div>
            <div className="product__wrapper">

                {products.map((product) => (
                    <div className="product__cart" key={product.id}>
                        <div className="cart-top">
                            <span className="product__span">-40%</span>

                            <div className="product__activates">
                                <div className="like" onClick={() => handleLike(product)}>
                                    <img
                                        src="./src/assets/icons/product__like.png"
                                        alt=""
                                        className="like-icon" />
                                </div>

                                <div className="eye" onClick={() => setSelectedProduct(product)}>
                                    <img
                                        src="./src/assets/icons/product__eye.png"
                                        alt=""
                                        className="eye-icon" />
                                </div>
                            </div>

                            <div className="product__img">
                                <img src={product.image} alt={product.name} />
                            </div>

                            <div className="cart-btn">
                                <button
                                    className="add__to-cart"
                                    onClick={() => handleAddToCart(product)}
                                >Add To Cart
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
                                <img
                                    src="./src/assets/icons/product__star.png"
                                    alt="star"
                                    className="rating-star" />
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
    )
}

export default Selling;
