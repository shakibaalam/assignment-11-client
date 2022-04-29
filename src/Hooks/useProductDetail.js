import { useEffect, useState } from "react";

const useProductDetail = (id) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `product.json/inventory/:${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return [product, setProduct];
}
export default useProductDetail;