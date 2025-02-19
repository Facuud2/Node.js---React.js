// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductContainer from './components/ProductContainer';
import Footer from './components/Footer';

const App = () => {
  // Estado para almacenar los productos
  const [products, setProducts] = useState([]);

  // Función para obtener los productos del backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/items');
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        const data = await response.json();
        setProducts(data); // Almacenar los productos en el estado
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    fetchProducts(); // Llamar a la función para cargar los productos
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div>
      <Header />
      {/* Pasar los productos como prop al componente ProductContainer */}
      <ProductContainer products={products} />
      <Footer />
    </div>
  );
};

export default App;