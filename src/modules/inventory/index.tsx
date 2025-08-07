import { useInventoryStore } from "@/store/inventoryStore";
import { useEffect } from "react";
import InventoryItem from "./components/InventoryItem";

const Inventory = () => {
  const { fetchInventories, items } = useInventoryStore();
  useEffect(() => {
    fetchInventories();
  }, [fetchInventories]);
  return (
    <div>
      Inventory List
      <div className="flex gap-4">
        {items.map((item) => (
          <InventoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
