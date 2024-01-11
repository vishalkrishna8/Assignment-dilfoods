"use client"

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../../components/icons/loader';
import { addToCart } from '../../../redux/Cartslice';
import { useRouter } from "next/navigation";
import data from '../../../data/data';

const ProductDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setLoading(true);
    const productId = parseInt(window.location.pathname.split('/').pop());
    const foundProduct = data.find((product) => product.id === productId);

    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (product.id && Array.isArray(cart) && cart.length > 0) {
      const isProductAdded = cart.some((cartProduct) => cartProduct.id === product.id);
      setIsAdded(isProductAdded);
    }
  }, [product, cart]);


  const handleAddToCart = () => {
    setIsAdded(true);
    dispatch(addToCart({ ...product }));
  };


  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-20 h-20">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen py-8">
        <div className="flex-center mt-8 mb-4 justify-center justify-items-center h-c-screen text-2xl font-extrabold">
          <p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-slate-600 text-transform: uppercase">
            Product details
          </p>
        </div>
        <div className="flex flex-col ml-6 mr-6 md:flex-row">
          <div className="flex flex-col ml-6 mr-6">
            <div className="w-96 h-80 overflow-hidden rounded-lg bg-gray-300 mb-4">
              {product.images ? (
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={product.images[1]}
                  alt="Product Image"
                />
              ) : (
                <img
                  className="w-28 h-24 object-cover rounded-lg"
                  src="/mylogo.png"
                  alt="Product Image"
                />
              )}
            </div>
            <div className="flex mb-4">
              <div className="flex-row">
                <button
                  onClick={handleAddToCart}
                  className="w-64 bg-red-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-red-400"
                >
                  Add to Cart
                </button>


                <button
                  className="w-30 ml-7 bg-transparent border border-red-600 border-2 text-red-600 font-bold px-4 py-2 rounded-lg hover: bg-red-600 font-bold"
                  onClick={() => router.push("/cart")}>
                  Buy now
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 ml-6 mr-6 text-grey-800">
            <h2 className="text-2xl text-red-600 font-bold mb-4 text-transform: capitalize">{product.title}</h2>
            <div className='mb-4'>
              <span className="text-xl  font-semibold">Brand : </span>
              <span className='text-xl font-semibold'>{product.brand}</span>
            </div>

            <div className='text-transform: normal-case'>
              <span className="font-semibold text-grey-800 text-lg mb-4">Product Description:</span>
              <p className="text-grey-800 text-lg mb-4 ">{product.description}</p>
            </div>

            <div className="flex">
              <div className="mr-4">
                <span className="font-semibold">Price : </span>
                <span> &#8377;{product.price}</span>
              </div>
              <div>
                <span className="font-semibold">Availability : </span>
                <span>{product.stock}</span>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default ProductDetails;
