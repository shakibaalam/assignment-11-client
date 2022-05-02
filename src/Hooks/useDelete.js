import useProduct from "./useProduct";

const useDelete = (id) => {
    const [products, setProducts] = useProduct();

    const url = `http://localhost:5000/products/${id}`
    fetch(url, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            const remaining = products.filter(product => product._id !== id);
            setProducts(remaining)
        })

};

export default useDelete;