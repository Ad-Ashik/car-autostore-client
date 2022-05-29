import { useEffect, useState } from "react";

const useProducts = productId => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        const url = `https://secret-inlet-23442.herokuapp.com/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [productId]);

    return [products];
}

export default useProducts;