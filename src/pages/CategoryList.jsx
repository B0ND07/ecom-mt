import React, {  useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

import axios from "axios";

const CategoryList = () => {
  const [newCategory, setCategory] = useState([]);

  let { index } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/categories/${index}/products`)
      .then((display) => {
  
        setCategory(display.data);
      });
  }, []);
 
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {newCategory.map((product) => (
            <div>
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.images[0]}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
              <button className="text-gray-50 mx-auto bg-red-500 hover:text-white-50 hover:bg-red-600 border-solid border py-2 px-2 rounded-lg w-18 text-center transition duration-200 box-border font-medium">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
