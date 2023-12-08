import './ProductCard.css'
import React, { useState } from 'react';

function ProductCard({ p, onDelete, onUpdate }) {
  const [nueva_descripcion, setNewDescription] = useState('');
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);

  const handleUpdate = () => {
    onUpdate(p.nombre_producto, nueva_descripcion);
    setUpdateFormVisible(false);
  };

  return (
    <article id="product-card" key={p.id}>
      <h3>{p.nombre_producto}</h3>
      <p>{p.descripcion}</p>
      <button onClick={() => onDelete(p.nombre_producto)}>Eliminar</button>
      <button onClick={() => setUpdateFormVisible(true)}>Actualizar</button>
      {isUpdateFormVisible && (
        <div>
          <input
            type="text"
            placeholder="Nueva descripción"
            value={nueva_descripcion}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Enviar</button>
        </div>
      )}
    </article>
  );
}

export default ProductCard;
