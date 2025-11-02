import { useEffect, useState } from "react";
import './CartPage.css'

function CartPage() {
    const [cart, setCart] = useState<any[]>([])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartProducts") || "[]")
        setCart(items)
    }, [])

    const handleRemove = (index: number) => {
        const updated = [...cart]
        updated.splice(index, 1)
        setCart(updated)
        localStorage.setItem("cartProducts", JSON.stringify(updated))
    }

    return (
        <div className="cart-wrapper">
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>hec qanday maxsulot yoq</p>
            ) : (
                cart.map((item, index) => (
                    <div className="cart-card" key={index}>
                        <img src={item.image} alt={item.name} />
                        <div className="cart-info">
                            <h3>{item.name}</h3>
                            <p>
                                <b>Price:</b> {item.currentPrice}{" "}
                                <span style={{textDecoration: "line-through", color: "gray" }}>
                                    {item.originalPrice}
                                </span>
                            </p>
                            <p>Rating: {item.ratingCount}</p>
                            <button className="remove-btn"
                            onClick={() => handleRemove(index)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default CartPage