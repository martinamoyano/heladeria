import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';
import Slider from './components/Slider';


function App() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [addFormVisible, setAddFormVisible] = useState(false);

  const handleChangeText = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleDelete = (productName) => {
    fetch(`http://localhost:3000/heladeria/productos/${productName}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts((prevProducts) => prevProducts.filter((p) => p.nombre_producto !== productName));
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  };
  
  const handleUpdate = (productName, newDescription) => {
    fetch(`http://localhost:3000/heladeria/productos/${productName}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ descripcion: newDescription }),
    })
      .then((res) => res.json())
      .then((updatedProduct) => {
        setProducts((prevProducts) =>
          prevProducts.map((p) =>
            p.nombre_producto === updatedProduct.nombre_producto ? updatedProduct : p
          )
        );
      })
      .catch((error) => {
        console.error('Error al actualizar el producto:', error);
      });
  };

  const handleAdd = () => {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const descripcion = document.getElementById('descripcion').value;
    const tipo = document.getElementById('tipo').value;
  
    const newProduct = {
      nombre_producto: nombreProducto,
      descripcion: descripcion,
      tipo: tipo,
    };
  
    fetch('http://localhost:3000/heladeria/productos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((addedProduct) => {
        setProducts((prevProducts) => [...prevProducts, addedProduct]);
      })
      .catch((error) => {
        console.error('Error al agregar el producto:', error);
      });
  };
  

  const handleAddButtonClick = () => {
    setAddFormVisible(true);
  };

  useEffect(() => {
    fetch('http://localhost:3000/heladeria/')
      .then((res) => res.json())
      .then((data) => {
        const productos = data;
        setProducts(productos);
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la API:', error);
      });
  }, []);
  

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <section id="inicio">
          <Slider/>
        </section>

        <section id="sabores">
          <SearchBar onChangeText={handleChangeText} />
          {products
            .filter((prod) => prod.nombre_producto.toLowerCase().includes(searchText))
            .map((p) => (
              <ProductCard
                key={p.id}
                p={p}
                onDelete={(productName) => handleDelete(productName)}
                onUpdate={(productName, newDescription) => handleUpdate(productName, newDescription)}
              />
            ))}
          <button onClick={handleAddButtonClick}>Añadir Producto</button>
          {addFormVisible && (
          <div>
            <input type="text" id="nombreProducto" placeholder="Nombre del producto" />
            <input type="text" id="descripcion" placeholder="Descripción" />
            <input type="text" id="tipo" placeholder="Tipo" />
            <button onClick={() => handleAdd({
              nombre_producto: document.getElementById('nombreProducto').value,
              descripcion: document.getElementById('descripcion').value,
              tipo: document.getElementById('tipo').value,
            })}>
              Enviar
            </button>
          </div>
          )}
        </section>

        <section id="quienes-somos" className="quienes-somos-section">
          <div className="quienes-somos-content">
            <div className="quienes-somos-image">
              <img src="src/assets/img-quienes-somos.jpg" alt="heladera sirviendo a clientes" id="img-quienes-somos" />
            </div>
            <div className="quienes-somos-text">
              <h3>¿Quiénes somos?</h3>
              <p>En el corazón de nuestra querida provincia nació una idea fantástica: crear la heladería de nuestros sueños. En Buenos Aires, un grupo de amigas apasionadas por la gastronomía y fanáticas de los helados se juntaron para dar vida a un rincón único donde la creatividad y el sabor se fusionan.
              Con mucha garra y pasión, empezamos a meterle ficha a la investigación con ingredientes frescos y de primera. Nuestro viaje nos llevó a descubrir recetas tradicionales y gustitos exóticos de todo el mundo, y así nació nuestro menú variado y copado.
              Desde el primer día, pusimos el corazón en usar ingredientes naturales y de la zona siempre que se podía. Valoramos la calidad sobre la cantidad y laburamos incansablemente para tirar helados que te vuelen la peluca y te saquen una sonrisa.
              Nuestro pequeño negocio fue creciendo gracias al aguante y la fidelidad de nuestros amigos y amigas. Hoy, Heladeria Vintage es un lugar donde las familias se juntan, los amigos se reúnen y los fanáticos de los helados encuentran su segunda casa.
              A diario, le ponemos la pata para superar tus expectativas y mantener viva la llama de la creatividad en cada uno de nuestros gustos. Sabemos que la vida es más linda con un helado en la mano, y estamos acá para hacerte feliz en cada visita.
              Gracias por ser parte de nuestra historia y por dejarnos ser parte de la tuya. ¡Esperamos verte pronto en Heladeria Vintage!</p>
            </div>
          </div>
        </section>

        <section id="contacto">
        <div className="contacto">
            <ContactForm />
        </div>
        </section>
      </main>
    </>
  );
}

export default App;
