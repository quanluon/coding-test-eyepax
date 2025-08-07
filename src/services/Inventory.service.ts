import type { IInventory } from "@/types/inventory.types";
import BaseHttpService from "./BaseHttp.service";
import { mockInventories } from "./mock";

class InventoryService extends BaseHttpService {
  async getAll(): Promise<IInventory[]> {
    return mockInventories;
  }
}

export default new InventoryService();
