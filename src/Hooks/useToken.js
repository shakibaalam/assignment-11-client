import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            console.log(user);
            const email = user?.user?.email
            if (email) {
                const url = `https://guarded-stream-31463.herokuapp.com/login`
                fetch(url, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ email })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setToken(data);
                        localStorage.setItem('accessToken', data.accessToken);
                    })
            }
        }
        getToken()

    }, [user]);

    return [token]
}
export default useToken;