import type { ICart } from "@/types/cart.types";
import BaseHttpService from "./BaseHttp.service";
import { mockCart } from "./mock";

class CartService extends BaseHttpService {
  async getCart(): Promise<ICart> {
    return mockCart;
  }
}

export default new CartService();
