import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Footer from "home/Footer";

const Header = React.lazy(() => import("home/Header"));

const PDPContent = React.lazy(() =>
  import("pdp/PDPContent").catch(() => ({
    default: () => <div>Product details are currently unavailable.</div>,
  }))
);
const HomeContent = React.lazy(() => import("home/HomeContent"));

const CartContent = React.lazy(() =>
  import("cart/CartContent").catch(() => ({
    default: () => <div>Cart content are currently unavailable.</div>,
  }))
);



import ErrorBoundary from "./ErrorBoundary";

const MainLayout = () => (
  <ErrorBoundary fallback={<h2>Oops! An error occurred.</h2>}>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route
            path="/product/:id"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <PDPContent />
              </React.Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <CartContent />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  </ErrorBoundary>
);

export default MainLayout;
