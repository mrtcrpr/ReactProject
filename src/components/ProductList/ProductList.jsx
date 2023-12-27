import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
export default function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    let response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };
  useEffect(() => {
    //   makeAsyncCall();
    //   makeHttpCall();
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://dummyjson.com/products/${id}`); 
      setProducts(products.filter((product) => product.id !== id)); 
    } catch (error) {
      console.error("Error :", error);
     
    }
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-6 col-12 mb-5">
              <ProductCard product={product} deleteProduct={deleteProduct} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
