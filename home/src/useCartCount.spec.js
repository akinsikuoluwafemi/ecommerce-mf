import { renderHook} from "@testing-library/react";
import { useCartCount } from "./useCartCount";
import { act } from "react";

let callback = () => { };

jest.mock("cart/cart", () => ({
  cart: {
    cartItems: [],
    subscribe: (cb) => {
      callback = cb;
    }
  }
}));

describe("useCartCount", () => {
  it("should return cart count", () => {
    const { result } = renderHook(() => useCartCount());
    expect(result.current).toBe(0);
  })

  it("should return updated count", () => {
    const { result } = renderHook(() => useCartCount());

    act(() => {
      callback({cartItems: [{id: 1, quantity: 1}]});
    })
    expect(result.current).toBe(1);
  })

});