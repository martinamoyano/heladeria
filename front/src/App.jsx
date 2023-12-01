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

  const handleChangeText = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  useEffect(() => {
    fetch('https://api.mockfly.dev/mocks/a63eaabf-94e4-4feb-aa29-c3891e23efc0/flavours')
      .then((res) => res.json())
      .then((data) => {
        const flavors = data.flavours;
        setProducts(flavors);
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
            .filter((prod) => prod.title.toLowerCase().includes(searchText))
            .map((p) => (
              <ProductCard p={p} key={p.id} />
            ))}
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
