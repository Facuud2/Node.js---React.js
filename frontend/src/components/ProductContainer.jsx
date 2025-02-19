// ProductContainer.jsx
import React from 'react';
import Item from './Item';

const ProductContainer = ({ products }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Nuestros Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;