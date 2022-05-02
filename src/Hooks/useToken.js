import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getAdd = async () => {
            const email = user.email;
            const url = `http://localhost:5000/products?email=${email}`
            fetch(url)
                .then(res => res.json())
                .then(data => console.log(data));
        }
        getAdd();
    }, [user])
    return [token];
}

export default useToken;