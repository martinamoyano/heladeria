import './ProductCard.css'

function ProductCard({p}){
    return (
        <article id="product-card" key={p.id}>
            <h3>{p.nombre_producto}</h3>
            <p>{p.descripcion}</p>
        </article>
    );

}

export default ProductCard;

/* <img src={p.image} alt={p.title}/> */