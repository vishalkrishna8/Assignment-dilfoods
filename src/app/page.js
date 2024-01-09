"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Cards from '../components/Cards';
import data from '../data/data';
import About from '../components/About';
import Footer from '../components/Footer';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      setProducts(data);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  return (
    <main>
      <About />
      <div className="flex-center mt-8 mb-4 justify-center justify-items-center h-c-screen text-4xl font-extrabold">
        <p className="text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-slate-600 text-transform: uppercase">
          Our products
        </p>
      </div>
      <div className="mt-10 mr-10 ml-10 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-4 mb-20">
        {products?.map((product) => (
          <Link href={`products/${product.id}`} key={product.id}>
            <Cards product={product} />
          </Link>
        ))}
      </div>
      <Footer />
    </main>
  );
}
