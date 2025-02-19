import React from 'react';

const Item = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <button 
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Item;