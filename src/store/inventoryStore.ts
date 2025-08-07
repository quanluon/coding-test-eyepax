import InventoryService from "@/services/Inventory.service";
import type { IErrorResponse } from "@/types";
import type { IInventory } from "@/types/inventory.types";
import { create } from "zustand";

interface InventoryState {
  error: string;
  isLoading: boolean;
  items: IInventory[];
}

interface InventoryActions {
  fetchInventories: () => Promise<void>;
}

export type InventoryStore = InventoryState & InventoryActions;

export const useInventoryStore = create<InventoryStore>()((set) => ({
  error: "",
  isLoading: false,
  items: [],
  fetchInventories: async () => {
    set({ isLoading: true, error: "" });
    try {
      const response = await InventoryService.getAll();
      set({ items: response });
    } catch (error) {
      set({
        error:
          (error as IErrorResponse)?.message || "Failed to fetch inventories",
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
