import { useRef } from "react";
import "./Categories.css";

// Rasm importlari
import arrowLeft from "../../assets/icons/arrow-left.png";
import arrowRight from "../../assets/icons/arrow-right-icon.png";
import categoryPhone from "../../assets/img/Category-CellPhone.png";

function Categories() {
    const cartsRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (cartsRef.current) {
            const cart = cartsRef.current.querySelector(".categories-cart") as HTMLDivElement;
            if (cart) {
                const scrollAmount = cart.offsetWidth * 2;
                cartsRef.current.scrollBy({
                    left: direction === "left" ? -scrollAmount : scrollAmount,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <div className="categories">
            <div className="categories__span-text">
                <span className="categories__span"></span>
                <p className="categories__text">Categories</p>
            </div>

            <div className="categories__browse-btn">
                <h1 className="categories__browse">Browse By Category</h1>

                <div className="categories__btn">
                    <button className="left__btn ctg-btn" onClick={() => scroll("left")}>
                        <img src={arrowLeft} alt="left" />
                    </button>

                    <button className="right__btn ctg-btn" onClick={() => scroll("right")}>
                        <img src={arrowRight} alt="right" />
                    </button>
                </div>
            </div>

            <div className="categories-carts" ref={cartsRef}>
                {[...Array(7)].map((_, i) => (
                    <div className="categories-cart" key={i}>
                        <img src={categoryPhone} alt="" className="categories-img" />
                        <p className="categories__cart-text">Phones {i + 1}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;
