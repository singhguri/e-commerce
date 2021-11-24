import React, { useEffect } from "react";
// import { commerce } from "./lib/commerce";
import { Products, Navbar } from "..";

const Dashboard = () => {
  // const [products, setProducts] = useState([]);

  // const fetchProducts = async () => {
  //   // const { data } = await commerce.products.list();

  //   setProducts(data);
  // };

  useEffect(() => {
    console.log(localStorage.getItem("token"));
  }, []);

  // console.log(products);

  return (
    <>
      <Navbar />
      <Products />
    </>
  );
};

export default Dashboard;
