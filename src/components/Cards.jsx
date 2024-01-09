'use client'

import React, { useEffect, useState } from 'react';

const Cards = ({ product }) => {
  const [productPrice, setProductPrice] = useState(product.price);
  const [stars, setStars] = useState(5);

  useEffect(() => {
    const MRP = Math.random() * 30;
    const MRPValue = (product.price * MRP) / 100 + product.price;
    setProductPrice(MRPValue.toFixed(0));
    setStars(Math.floor(Math.random() * (5 - 3 + 1)) + 3);
  }, [product]);

  return (
    <div className="relative flex w-64 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-64 overflow-hidden rounded-xl" href="#">
        <img
          className="object-cover w-64"
          src={product.images[1]}
          alt="product images"
        />
        <span className="absolute top-0 right-0 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">
          {(((productPrice % product.price) / productPrice) * 100).toFixed(0)}% OFF
        </span>
      </div>
      <div className="mt-4 px-5 pb-2">
        <h5 className="text-lg tracking-tight text-slate-900">
          {product.title.slice(0, 1).toUpperCase() + '' + product.title.slice(1)}
        </h5>
        <div className="mt-2 mb-2 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-slate-900">
              &#8377;{product.price}
            </span>
            <span className="text-sm text-slate-900 line-through">
              &#8377;{productPrice}
            </span>
          </p>
          <div className="flex items-center">
            {new Array(stars).fill('').map((star, index) => (
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                key={index}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}

            <span className="mr-2 rounded bg-red-600 px-1.5 py-0.5 text-xs text-white font-semibold">
              {stars}.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;