import type { IInventory } from "./inventory.types";

export interface ICartItem {
  inventory: IInventory;
  quantity: number;
}

export interface ICart {
  items: ICartItem[];
}
