import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { Newcontext } from "../App";

function ProductDetails() {
  const [products] = useContext(Newcontext);
  let { index } = useParams();
  let product = products[index];

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ textAlign: "center" }}
    >
      <img
        className="w-[30rem] my-6"
        src={product.images[0]}
        alt={product.title}
      />
      <h2>{product.title}</h2>

      <h3>${product.price}</h3>
      <div style={{ width: "500px", margin: "auto", textAlign: "center" }}>
        <h5>{product.description}</h5>
      </div>
      <button className="my-10 text-gray-50 mx-auto bg-red-500 hover:text-white-50 hover:bg-red-600 border-solid border py-2 px-2 rounded-lg w-18 text-center transition duration-200 box-border font-medium">
        Add to cart
      </button>
    </div>
  );
}

export default ProductDetails;
