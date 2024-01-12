"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Checkout() {

  const { cart, totalPrice } = useSelector((store) => store.cart);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    pincode: "",
    paymentmethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed')
  };

  return (
    <div className="min-h-screen py-8">
      <div className="flex-center mt-4 mb-2 justify-between justify-items-center h-c-screen text-2xl font-extrabold">
        <p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-slate-600 uppercase">
          secure checkout
        </p>
      </div>
      <div className="flex flex-col ml-8 mr-8 gap-x-40 md:flex-row gap-y-8">
        <div className="mt-2 w-96 ml-8 mr-8  flex-col justify-between items-start">
          <div className="flex items-center justify-evenly gap-4">
            <div className="md:flex-1 ml-2 mr-6 mt-8">
              <span className="text-2xl text-red-600 font-bold mb-6 capitalize">order summary</span>
              {cart.map((product) => (
                <div className="flex justify-between items-center py-2" key={product.id}>
                  <span className="text-gray-800 font-normal capitalize">{product.title} :</span>
                  <span className="ml-2 text-gray-800 font-semibold">
                    <span>&#8377; </span>
                    {product.price * product.quantity}
                  </span>
                </div>
              ))}
              <div className=" flex justify-between items-center border-t-2 border-slate-800 py-2">
                <span className="font-semibold">Total Price :</span>
                <span className="ml-2 font-semibold">
                  <span>&#8377; </span>
                  {totalPrice}
                </span>
              </div>
            </div>
          </div>


        </div>
        <div className="p-4 mt-2 w-96 ml-8 mr-8 bg-white shadow-xl rounded-md flex-col justify-between items-start">
          <div className="border-black border-5 flex items-start justify-between">
            <form onSubmit={handleSubmit} className="mt-4">
              <span className="text-2xl text-red-600 flex justify-center font-bold mb-4 capitalize">Payment details</span>
              <div className="mt-2 mb-2 flex flex-col justify-between items-start">
                <div className="mb-2 pl-2">
                  <label className="text-medium font-medium">Full Name : </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="py-2 px-4 outline-1 placeholder:text-grey-800 rounded-sm w-full"
                  />
                </div>

                <div className="mb-2 pl-2">
                  <label className="text-medium font-medium">Email : </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="px-4 py-2 outline-1 placeholder:text-grey-800 rounded-sm w-full"
                  />
                </div>
                <div className="mb-2 pl-2">
                  <label className="text-medium font-medium">Address : </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your address"
                    className="px-4 py-2 outline-1 placeholder:text-grey-800 rounded-sm w-full"
                  />
                </div>
                <div className="mb-2 pl-2">
                  <label className="text-medium font-medium">Pincode: </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    placeholder="Enter your pincode"
                    className="px-4 py-2 outline-1 placeholder:text-grey-800 rounded-sm w-full"
                  />
                </div>

                <div className="pl-2 text-slate-800 font-semibold mt-4 mb-2">Payment Method </div>
                <div className="mb-2 pl-2"><input
                  type="radio"
                  name="paymentmode"
                  value={formData.paymentmethod}
                  onChange={handleChange}
                  required
                />
                  <label htmlFor="upi"> UPI</label>
                </div>
                <div className="mb- pl-2"><input
                  type="radio"
                  name="paymentmode"
                  value={formData.paymentmethod}
                  onChange={handleChange}
                  required
                />
                  <label htmlFor="cod"> COD</label>
                </div>


              </div>

              <div className="flex justify-center mb-4">
                <button className="py-2 px-4 ml-4 mr-4 text-white font-semibold rounded-md bg-red-600 hover:bg-red-500 mb-2" type="submit">
                  PAY NOW
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
