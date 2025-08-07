import type { ICart } from "@/types/cart.types";
import type { IInventory } from "@/types/inventory.types";

export const mockInventories: IInventory[] = [
  { name: "bacon", unitPrice: 10.99, quantity: 10, id: 1 },
  { name: "eggs", unitPrice: 3.99, quantity: 10, id: 2 },
  { name: "cheese", unitPrice: 6.99, quantity: 10, id: 3 },
  { name: "chives", unitPrice: 1.0, quantity: 10, id: 4 },
  { name: "wine", unitPrice: 11.99, quantity: 10, id: 5 },
  { name: "brandy", unitPrice: 17.55, quantity: 10, id: 6 },
  { name: "bananas", unitPrice: 0.69, quantity: 10, id: 7 },
  { name: "ham", unitPrice: 2.69, quantity: 10, id: 8 },
  { name: "tomatoes", unitPrice: 3.26, quantity: 10, id: 9 },
  { name: "tissue", unitPrice: 8.45, quantity: 10, id: 10 },
];

export const mockCart: ICart = {
  items: [],
};
