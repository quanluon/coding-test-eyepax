import Button from "@/components/Button";
import InputQuantity from "@/components/InputQuantity";
import InventoryDetails from "@/components/InventoryDetails";
import { useCartStore } from "@/store/cartStore";
import type { IInventory } from "@/types/inventory.types";
import { useState } from "react";

type Props = {
  item: IInventory;
};

const InventoryItem = ({ item }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();
  return (
    <div className="bg-gray-400 w-fit p-3">
      <InventoryDetails item={item} />
      <InputQuantity
        value={quantity}
        onChange={setQuantity}
        max={item.quantity}
      />
      <Button
        disabled={quantity < 0 || quantity > item.quantity}
        onClick={() => addToCart(item, quantity)}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default InventoryItem;
