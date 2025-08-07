import Button from "@/components/Button";
import InputQuantity from "@/components/InputQuantity";
import InventoryDetails from "@/components/InventoryDetails";
import { useCartStore } from "@/store/cartStore";
import type { ICartItem } from "@/types/cart.types";
import React, { useEffect, useState } from "react";

type Props = {
  item: ICartItem;
};

const CartItem = ({ item }: Props) => {
  const [value, setValue] = useState(item.quantity);
  const { updateCart, addToCart } = useCartStore();
  const handleChange = (value: number) => {
    if (value > item.inventory.quantity) {
      alert("Not enough quantity");
      setValue(item.quantity);
      return;
    }
    setValue(value);
    updateCart(item.inventory, value);
  };

  useEffect(() => {
    // setValue(item.quantity);
  }, [item.quantity]);

  return (
    <div className="bg-gray-400 p-2 flex gap-2">
      <InventoryDetails item={item.inventory} />
      <InputQuantity
        max={item.inventory.quantity}
        onChange={handleChange}
        value={item.quantity}
      />
      <Button onClick={() => addToCart(item.inventory, 0)}>Delete</Button>
    </div>
  );
};

export default CartItem;
