import { useEffect, useState } from "react";
import './LikePage.css'

function LikePage() {
    const [liked, setLiked] = useState<any[]>([])

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("likedProducts") || "[]")
        setLiked(items)
    }, [])

    const handleRemove = (index: number) => {
        const updated = [...liked]
        updated.splice(index, 1)
        setLiked(updated)
        localStorage.setItem("likedProducts", JSON.stringify(updated))
    }

    return (
        <div className="cart-wrapper">
            <h2>Cart</h2>
            {liked.length === 0 ? (
                <p>hec qanday maxsulot yoq</p>
            ) : (
                liked.map((item, index) => (
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

export default LikePage