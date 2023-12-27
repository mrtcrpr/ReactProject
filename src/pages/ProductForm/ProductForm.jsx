import React, { useState } from "react";
import axios from "axios";

export default function ProductForm() {
  const [data, setData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: null,
  });

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onFileChangeHandler = (e) => {
    setData({ ...data, image: e.target.files[0] });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("image", data.image);

    try {
      const response = await axios.post(
        `https://dummyjson.com/products/add`,
        formData
      );

      if (response.status === 200) {
        setData({
          name: "",
          category: "",
          description: "",
          price: "",
          image: null,
        });
        alert("Product added successfully!");
        console.log(data);
      }
    } catch (error) {
      alert("Error adding product: " + error.message);
    }
  };

  return (
    <>
      <h3>Add Product</h3>
      <form encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="image">Choose a picture</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            onChange={onFileChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={data.name}
            onChange={onChangeHandler}
            placeholder="Product Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Choose a category </label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            name="category"
            onChange={onChangeHandler}
            value={data.category}
          >
            <option>Mobile Phone</option>
            <option>Television</option>
            <option>Computer</option>
            <option>Headphones</option>
            <option>Mouse</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            id="description"
            name="description" 
            onChange={onChangeHandler}
            value={data.description}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            onChange={onChangeHandler}
            value={data.price}
            placeholder="Price"
          />
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={onSubmitHandler}
        >
          Add
        </button>
      </form>
    </>
  );
}
