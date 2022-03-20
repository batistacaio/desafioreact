import { useState, useEffect } from 'react'

function Modelos() {
    const [modelo, setModelo] = useState([])

    useEffect(() => {
        fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/1/modelos")
            .then(res => res.json())
            .then(data => setModelo(data))
    }, [])

    return (
        <ul>
            {modelo.map(modelo => (
                <li key={modelo.codigo}>
                    <a href={`/carros/${modelo.codigo}`}>{modelo.nome}</a>
                </li>
            ))}
        </ul>
    )
}

export default Modelos;