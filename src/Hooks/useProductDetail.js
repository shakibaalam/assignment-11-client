import { useEffect, useState } from "react";

const useProductDetail = (productId) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://guarded-stream-31463.herokuapp.com/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);
    return [product, setProduct];
}
export default useProductDetail;