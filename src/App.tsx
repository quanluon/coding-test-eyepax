import { useEffect } from "react";

import HttpService from "@/services/BaseHttp.service";
import Inventory from "@/modules/inventory";
import Cart from "@/modules/cart";

const HttpSer = new HttpService();

function App() {
  useEffect(() => {
    HttpSer.get<string>("/")
      .then((data) => {
        console.log("API Response:", data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);
  return (
    <div>
      Hello coding test
      <Inventory />
      <Cart />
    </div>
  );
}

export default App;
