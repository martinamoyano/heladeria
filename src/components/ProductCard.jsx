function ProductCard({p}){
    return (
        <article key={p.id}>
            <h3>{p.title}</h3>
            <img src={p.image} alt={p.title}/>
            <p>{p.price}</p>
            <p>{p.description}</p>
        </article>
    );

}

export default ProductCard;