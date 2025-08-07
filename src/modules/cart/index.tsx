import { useCartStore } from "@/store/cartStore";
import React, { useEffect } from "react";
import CartItem from "./components/CartItem";

function Cart() {
  const { cart, getCart } = useCartStore();
  useEffect(() => {
    getCart();
  }, [getCart]);
  return (
    <div>
      Cart
      <div className="flex flex-col gap-2">
        {cart.items?.map((item, idx) => (
          <CartItem item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
