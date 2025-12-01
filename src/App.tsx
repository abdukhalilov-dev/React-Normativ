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
import CartCounter from "./assets/cart-counter/CartCounter";
import Exclusive from "./assets/Exclusive register/Exclusive";
import Account from "./assets/My account/Account";
import About from "./assets/About/About";
import Contact from "./assets/Contact/Contact";
import Gaming from "./assets/Gaming/Gaming";


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
            <Route path="/counter" element={<CartCounter />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/exclusive" element={<Exclusive />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gaming" element={<Gaming />} />
        </Routes>

        {/* Footer shu yerda — har bir sahifada chiqadi */}
        <Footer />
      </div>
    </>
  );
}

export default App;
