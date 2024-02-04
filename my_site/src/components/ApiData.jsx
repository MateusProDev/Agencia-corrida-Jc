// NOTE: components
import { useState, useEffect } from 'react';
import StarRating from './StarRating';

// NOTE: Styles
import './ApiData.css'
// NOTE: Url da API
const url = "http://localhost:3000/products";

// NOTE: Estados dos objetos
function ApiData() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

// NOTE: Função assícrona para fazer a chamada dos dados da API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
    
                const contentType = res.headers.get('Content-Type');
                
                if (contentType && contentType.includes('application/json')) {
                    const data = await res.json();
                    setProducts(data);
                } else {
                    throw new Error(`Resposta não é JSON: ${contentType}`);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // NOTE: Verifica se o nome foi preenchido
        if (!name.trim()) {
            setError("Por favor, preencha o nome.");
            return;
        }

        // NOTE: Cria o objeto do produto
        const product = {
            name,
            rating,
            comment,
        };

        // NOTE: Envio dos dados para a API pelo metodo POST
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product),
            });

            if (!res.ok) {
                throw new Error(`Erro ao criar produto: ${res.status}`);
            }

            const addedProduct = await res.json();

            // NOTE: Atualiza a lista de produtos
            setProducts((prevProducts) => [...prevProducts, addedProduct]);

            // NOTE: Limpa os campos do formulário
            setName("");
            setRating(0);
            setComment("");
            setError(null);
        } catch (error) {
            setError(`Erro ao enviar a requisição: ${error.message}`);
        }
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro: {error}</p>;
    }

// NOTE: Retorna o meu component ApiData
    return (
        <div className='apiData'>
            <div className='apiBox'>
            <h1>Comentarios</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        Nome: {product.name} <br />
                        Avaliação: <StarRating value={product.rating} readOnly /> <br />
                        Comentário: {product.comment}
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Avaliação:
                    <StarRating value={rating} onChange={setRating} />
                </label>
                <br />
                <label>
                    Comentário:
                    <input 
                        type="text" 
                        value={comment} 
                        onChange={(e) => setComment(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Criar</button>
            </form>
        </div>
        </div>
    );
}

export default ApiData;
