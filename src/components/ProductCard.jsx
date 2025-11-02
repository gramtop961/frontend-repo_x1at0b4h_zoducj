import React from 'react';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition hover:shadow-md">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-neutral-900 line-clamp-1">{name}</h3>
          <p className="mt-1 text-sm text-neutral-600">Men's Running Shoes</p>
        </div>
        <span className="rounded-full bg-neutral-900 px-3 py-1 text-sm font-semibold text-white">{price}</span>
      </div>
      <button className="mt-4 w-full rounded-full border border-neutral-300 bg-white px-4 py-2 font-medium text-neutral-900 hover:bg-neutral-50">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
