import React from 'react';
import '../styles/Catalog.css';

const products = [
  { id: 1, name: 'Batería', description: 'Batería de alta duración', price: 100, image: 'battery.jpg' },
  { id: 2, name: 'Llanta', description: 'Llanta de alta resistencia', price: 50, image: 'tire.jpg' },
  { id: 3, name: 'Filtro de Aceite', description: 'Filtro de aceite premium', price: 25, image: 'oil_filter.jpg' }
];

const Catalog = () => {
  return (
    <div className="container catalog-container">
      <h2>Catálogo de Productos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">Precio: ${product.price}</p>
            <button className='btn btn-primary'>Añadir al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
