import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("API Error");
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);


    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} width="50" alt={product.title} />
                    <p>{product.title} - ${product.price}</p>
                </li>
            ))}
        </ul>
    );
};

export default Products;
