import './FeaturesSection.css'

import deliverBus from "../img/deliver-bus.png";
import headphones from "../img/headphones.png";
import secure from "../img/secure.png";

function FeaturesSection() {
    return (
        <div className="features-section">

            <div className="features-item">
                <div className="features-img">
                    <img src={deliverBus} alt="delivery" />
                </div>

                <div className="features-text">
                    <p className="first-text">FREE AND FAST DELIVERY</p>
                    <p className="second-text">Free delivery for all orders over $140</p>
                </div>
            </div>

            <div className="features-item">
                <div className="features-img">
                    <img src={headphones} alt="headphones" />
                </div>

                <div className="features-text">
                    <p className="first-text">24/7 CUSTOMER SERVICE</p>
                    <p className="second-text">Friendly 24/7 customer support</p>
                </div>
            </div>

            <div className="features-item">
                <div className="features-img">
                    <img src={secure} alt="secure" />
                </div>

                <div className="features-text">
                    <p className="first-text">MONEY BACK GUARANTEE</p>
                    <p className="second-text">We return money within 30 days</p>
                </div>
            </div>

        </div>
    )
}

export default FeaturesSection;
