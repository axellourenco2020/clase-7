// src/components/ProductDetail.js
import React, { useState } from 'react';

const ProductDetail = () => {
  const [purchased, setPurchased] = useState(false);

  const handleBuyClick = () => {
    setPurchased(true);
  };

  return (
    <div className="product">
      <h1>Nombre del Producto</h1>
      <p>Descripción del Producto</p>
      <p>Precio: $99.99</p>
      <p>SKU: 123456789</p>
      <p>Cantidad disponible: 10</p>
      <button onClick={handleBuyClick}>Comprar</button>
      {purchased && <p className="purchase-message">Gracias por su compra</p>}
    </div>
  );
};

export default ProductDetail;

