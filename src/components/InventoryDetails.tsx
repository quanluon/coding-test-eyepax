import type { IInventory } from "@/types/inventory.types";

type Props = {
  item: IInventory;
};

const InventoryDetails = ({ item }: Props) => {
  return (
    <div>
      <p> Name: {item.name}</p>
      <p> Price: {item.unitPrice}</p>
      <p> Quantity: {item.quantity}</p>
    </div>
  );
};

export default InventoryDetails;
