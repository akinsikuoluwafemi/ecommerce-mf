import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Footer from "home/Footer";
import Header from "home/Header";
import PDPContent from "pdp/PDPContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";




import ErrorBoundary from "./ErrorBoundary";

const MainLayout = () => (
  <ErrorBoundary fallback={<h2>Oops! An error occurred.</h2>}>
      <div className="text-3xl mx-auto max-w-6xl">
            <Header />
        <div className="my-10">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/product/:id" element={<PDPContent />} />
            <Route path="/cart" element={<CartContent />}/>
          </Routes>
        </div>
        <Footer />
      </div>
  </ErrorBoundary>
);

export default MainLayout;
