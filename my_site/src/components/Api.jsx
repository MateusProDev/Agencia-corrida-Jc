import { useState, useEffect } from 'react'

const url = "https://localhost:3000/products";

function ApiData() {
    const [products, setProducts] = useState([]);

    // 1 resgatando dados
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);

            const data = await res.json();

            setProducts(data);
        }
        
        fetchData()
    }, []);

    return (
        <div className='ApiData'>
            <h1>Lista de Produtos</h1>
        </div>
    )
}

export default ApiData;