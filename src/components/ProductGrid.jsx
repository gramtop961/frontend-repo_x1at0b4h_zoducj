import React from 'react';
import ProductCard from './ProductCard.jsx';

const products = [
  {
    id: 1,
    name: 'Nike Air Zoom Pegasus 40',
    price: '$130',
    image:
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Nike Air Max 270',
    price: '$150',
    image:
      'https://images.unsplash.com/photo-1529336953121-a0ce98f7cc52?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Nike React Infinity Run',
    price: '$160',
    image:
      'https://images.unsplash.com/photo-1547626740-02cb6aed9ef5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Nike Blazer Mid ’77',
    price: '$110',
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1600&auto=format&fit=crop",
  },
];

const ProductGrid = () => {
  return (
    <section id="releases" className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">New Releases</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              Fresh drops engineered for speed, comfort, and everyday style.
            </p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center text-sm font-semibold text-neutral-800 hover:underline">
            View All
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} image={p.image} name={p.name} price={p.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
