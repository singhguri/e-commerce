/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Login } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    // fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      {/* <Login /> */}
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
