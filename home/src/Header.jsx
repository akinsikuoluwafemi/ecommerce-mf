import React, { Suspense } from "react";
const MiniCart = React.lazy(() => import("cart/MiniCart"));
const Login = React.lazy(() => import("cart/Login"));
// import Login from "cart/Login";
import {Link}  from "react-router-dom";

const Header = () => {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          <Link to="/">Fidget Spinner World</Link>
          <div className="mx-5">|</div>
          <Link id="cart" to="/cart">
            Cart
          </Link>
        </div>
        <div className="flex-end relative">
          <Suspense fallback={<div>Loading...</div>}>
            <MiniCart />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Header;
