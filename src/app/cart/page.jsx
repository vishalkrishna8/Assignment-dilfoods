"use client"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateCartTotal,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/Cartslice";
import { useRouter } from "next/navigation";

export default function Cartpage() {
  const router = useRouter();
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatcher = useDispatch();

  useEffect(() => {
    dispatcher(calculateCartTotal(cart));
  }, [cart, dispatcher]);

  return (
    <div className="min-h-screen py-8">
      <div className="flex-center mt-8 mb-4 justify-center justify-items-center h-c-screen text-2xl font-extrabold">
        <p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-slate-600 text-transform: uppercase">
          In your cart
        </p>
      </div>

      <div className="justify-between justify-items-start">
        {cart?.length > 0 ? (
          cart.map((product) => {
            return (
              <div
                className="bg-white p-4 rounded-md shadow-md flex items-center justify-between my-4"

                key={product.id}
              >
                <img
                  className="ml-4 h-24 w-28 rounded-t-lg border object-cover object-center"
                  src={product.images[1]}
                  alt="img"
                />
                <div className="font-normal py-4">
                  <p>{product.title}</p>
                  <p>Price: &#8377; {product.price}</p>
                </div>

                <div className="flex items-center">

                  <label className="mr-2">Qty :</label>

                  <div className="items-center">
                    <button
                      className="bg-red-600 py-2 px-4 rounded-lg text-white text-normal"
                      onClick={() => dispatcher(increaseQuantity(product.id))}
                    >
                      Add
                    </button>

                    <span className="py-4 px-6 rounded-md">{product.quantity}</span>
                    <button
                      className="bg-red-600 py-2 px-4 rounded-md text-white text-normal"
                      onClick={() => dispatcher(decreaseQuantity(product.id))}
                    >
                      Remove
                    </button>
                    <button
                      className="py-2 px-4 ml-4 mr-4 text-white font-semibold rounded-md bg-red-600"
                      onClick={() => dispatcher(removeFromCart(product.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="ml-6 text-gray-800 text-xl font-semibold" >
            <span>Your cart is empty!</span>
          </div>
        )}
      </div>
      <div className="font-normal ml-6 mr-6 text-grey-800 mt-8">
        <span className="text-2xl text-red-600 font-bold mb-4 text-transform: capitalize">Summary</span>
        <div className="flex justify-between items-center border-t border-b py-2">
          <span className="text-gray-800">Cart Quantity :</span>
          <span className="text-gray-800 font-semibold">{totalQuantity}</span>
        </div>
        <div className="flex justify-between items-center py-2">
          <span className="text-gray-800">Total Price :</span>
          <span className="text-gray-800 font-semibold">
            <span>&#8377;</span>
            {totalPrice}
          </span>
        </div>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-400"
          onClick={() => router.push("/checkout")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

