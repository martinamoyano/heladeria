import './ProductCard.css'

function ProductCard({p}){
    return (
        
        <article id="product-card" key={p.id}>
            <h3>{p.title}</h3>
            <img src={p.image} alt={p.title}/>
            <p>{p.description}</p>
        </article>
    );

}

export default ProductCard;