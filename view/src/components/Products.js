import React, { useState, useEffect} from 'react';
import { getProducts } from '../utils/products';

export const Products = () => {
    const [productList, setProductList] = useState();
    const [error, setError] = useState();

    const fetchProducts = async () => {
        const res = await getProducts();

        if (res.error) {
            console.log(error);
            setError(res.error.message);
        }
        setProductList(res.data);
    };


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products Component test</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {productList?.map((product) => (
                    <li key={product.id}>
                        {product.name}
                        <br/>
                        {product.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};
