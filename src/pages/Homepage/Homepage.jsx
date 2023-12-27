import React from "react";
import ProductList from "../../components/ProductList/ProductList";

export default function HomePage() {

  // const myAsyncFunction = () => {
  //   return new Promise((resolve,reject) => {
  //     resolve("işlem başarılı");
  //   });
  // };


  // const makeAsyncCall = async () => {
  //   // myAsyncFunction().then(response=> {
  //   //   console.log("işlem başarılı cevap:" , response);
  //   // })
  //   // .catch((error)=> {
  //   //   console.log("işlem başarısız cevap: ", error);
  //   // })
  //   // .finally(()=> {
  //   //   console.log("işlem bitti");
  //   // })
  //   try {
  //     let response = await myAsyncFunction();
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const makeHttpCall = async () => {
  //   // fetch("https://dummyjson.com/products")
  //   // .then((response) => response.json())
  //   // .then((json)=> console.log(json))
  //   // .catch((e) => console.log(e))
  //   let response = await fetch("https://dummyjson.com/products");
  //   let json = await response.json();
  //   console.log(json);
  // };
  return (
    
    <div>
          {/* <button className="btn btn-primary">Homepage</button>
                <br />
                {/* SPA'larda href kullanımı yanlıştır. */}
          {/* <Link to={"/about"}>About'a Git</Link> */} 
      <ProductList/>
    </div>
  )
}

