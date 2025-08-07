import CartService from "@/services/Cart.service";
import type { IErrorResponse } from "@/types";
import type { ICart } from "@/types/cart.types";
import type { IInventory } from "@/types/inventory.types";
import { create } from "zustand";

interface CartState {
  isLoading: boolean;
  error: string;
  cart: ICart;
}

interface CartActions {
  addToCart: (inventory: IInventory, quantity: number) => void;
  updateCart: (inventory: IInventory, quantity: number) => void;
  getCart: () => Promise<void>;
}

export type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>()((set, get) => ({
  cart: { items: [] },
  isLoading: false,
  error: "",
  addToCart: (inventory: IInventory, quantity: number) => {
    const cart = get().cart;
    const items = cart?.items || [];
    if (quantity === 0) {
      set({
        cart: {
          items: items.filter((item) => item.inventory.id !== inventory.id),
        },
      });
      return;
    }
    const index = items.findIndex((item) => item.inventory.id === inventory.id);
    if (index >= 0) {
      const item = items[index];
      item.quantity += quantity;
      items[index] = item;
    } else {
      items.push({
        inventory,
        quantity,
      });
    }
    set({ cart });
  },
  updateCart: (inventory: IInventory, quantity: number) => {
    const cart = get().cart;
    const items = cart?.items || [];
    const index = items.findIndex((item) => item.inventory.id === inventory.id);
    if (index >= 0) {
      const item = items[index];
      item.quantity = quantity;
    } else {
      items.push({
        inventory,
        quantity,
      });
    }
    set({ cart });
  },
  getCart: async () => {
    set({ isLoading: true, error: "" });
    try {
      const cart = await CartService.getCart();
      set({ cart });
    } catch (error) {
      set({
        error: (error as IErrorResponse)?.message || "Failed to fetch cart!",
      });
    } finally {
      set({ isLoading: false });
    }
  },
}));
