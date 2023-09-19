import { useEffect, useState } from "react";
import './App.css';
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.mockfly.dev/mocks/a63eaabf-94e4-4feb-aa29-c3891e23efc0/flavours')
      .then(res => res.json())
      .then(data => {
        const flavors = data.flavours; // Accede al array 'flavours'
        setProducts(flavors); // Establece 'flavors' como 'products'
      })
      .catch(error => {
        console.error("Error al obtener los datos de la API:", error);
      });
  }, []);
  

  return (
    <main>
      {products.map((p, index) => (
        <ProductCard key={index} p={p} />
      ))}
    </main>
  );
}

export default App;