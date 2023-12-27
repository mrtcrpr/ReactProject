import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
	
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="card">
      <h3 className="card-id">Product Detail</h3>
      <img src={product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.category}</p>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.price}</p>
        
      </div>
    </div>
  );
}
