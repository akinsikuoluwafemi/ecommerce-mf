import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const MiniCart = React.lazy(() =>
  import("cart/MiniCart").catch(() => ({
    default: () => <div>MiniCart is currently unavailable.</div>,
  }))
);

const Login = React.lazy(() =>
  import("cart/Login").catch(() => ({
    default: () => <div>Login is currently unavailable.</div>,
  }))
);

export default function Header() {
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
          <Suspense fallback={<div>Loading MiniCart...</div>}>
            <MiniCart />
          </Suspense>

          <Suspense fallback={<div>Loading Login...</div>}>
            <Login />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
