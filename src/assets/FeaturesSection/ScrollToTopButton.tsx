import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import './ScrollToTopButton.css'



export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 200)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        visible && (
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="scroll-to-top">
                <ArrowUp />
            </button>
        )
    )

}