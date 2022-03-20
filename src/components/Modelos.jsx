import { useState, useEffect } from 'react'

function Modelos() {
    function id() {
        return window.location.pathname.split('/')[2]
    }

    const [modelos, setModelos] = useState([])

    useEffect(() => {
        fetch(`https://parallelum.com.br/fipe/api/v1/${window.location.pathname.split('/')[1]}/marcas/${id()}/modelos`)
            .then(res => res.json())
            .then(data => setModelos(data))
            .catch(err => console.log(err))
    }, [])

    return(
        <>
        <div className="container">
            <ul className="list-group list-group-flush">
                {modelos.modelos?.sort((a, b) => {
                    if(a.nome < b.nome) return 1
                    if(a.nome > b.nome) return -1
                    return 0
                }).map(modelo => (
                    <li className="list-group-item blockquote text-uppercase" key={modelo.codigo}>
                        <p>{modelo.codigo} - {modelo.nome}</p>
                    </li>
                ))}
            </ul>
        </div>
        <button className="btn btn-primary" onClick={() => window.history.back()}>Voltar</button>
        </>
    )
}

export default Modelos