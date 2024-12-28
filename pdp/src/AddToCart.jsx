import React, { useEffect,  } from "react";
import { jwt, addToCart, useLoggedIn } from "cart/cart";

const AddToCart = ({ id }) => {
    const loggedIn = useLoggedIn();
  

  // useEffect(() => {
  //   const unsubscribe = jwt.subscribe((jwt) => {
  //     setLoggedIn(!!jwt);
  //   });
  //   return () => unsubscribe(); // Clean up the subscription
  // }, []);

  return (
    loggedIn && (
      <button
        onClick={() => {
          addToCart(id);
          console.log(id, "id");
        }}
        className="bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5"
      >
        Add To Cart
      </button>
    )
  );
};

export default AddToCart;
