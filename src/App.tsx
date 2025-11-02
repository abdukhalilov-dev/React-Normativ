import "./App.css";
import FirstRow from "./assets/first-page/FirstRow";
import FourthRow from "./assets/fourth-page/FourthRow";
import Product from "./assets/Products/Product";
import SecondRow from "./assets/second-page/SecondRow";
import ThirdRow from "./assets/third-page/ThirdRow";
import CartPage from "./assets/cart/CartPage";
import LikePage from "./assets/cart/LikePage";
import { Routes, Route } from "react-router-dom";
import Categories from "./assets/categories/Categories";
import Selling from "./assets/Selling Products/Selling";
import Music from "./assets/categories/categories music/Music";
import Our from "./assets/our products/Our";
import NewArrivalSection from "./assets/NewArrivalSection/NewArrivalSection";
import FeaturesSection from "./assets/FeaturesSection/FeaturesSection";
import ScrollToTopButton from "./assets/FeaturesSection/ScrollToTopButton";
import Footer from "./assets/footer/Footer";
import Signup from "./assets/SignUpPage/Signup";
import LogIn from "./assets/log-in/LogIn";
import Wishlist from "./assets/wishlist page/Wishlist";

function App() {
  return (
    <>
      <FirstRow />
      <div className="container">
        <SecondRow />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <ThirdRow />
                <FourthRow />
                <Product />
                <Categories />
                <Selling />
                <Music />
                <Our />
                <NewArrivalSection />
                <FeaturesSection />
                <ScrollToTopButton />
              </>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/saved" element={<LikePage />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>

        {/* Footer shu yerda — har bir sahifada chiqadi */}
        <Footer />
      </div>
    </>
  );
}

export default App;
