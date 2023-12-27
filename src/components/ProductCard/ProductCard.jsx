import React from 'react'
import {Link} from "react-router-dom";
export default function ProductCard({product,deleteProduct}) {

  return (
    <div className="card">
			<img src={product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{product.title}</h5>
				<p className="card-text">{product.description}</p>
				<Link
					//to={"/products" + product.id} 
					to={`/products/${product.id}`}
					className="btn btn-primary"
				>
					Details
				</Link>
				<button className="btn btn-danger" onClick={()=> deleteProduct(product.id)} >Delete</button>
			</div>
		</div>
  )
}
