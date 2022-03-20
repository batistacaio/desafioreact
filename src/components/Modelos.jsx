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
            <ul>
                {(modelos.modelos?.map(modelo => (              
                    <li key={modelo.codigo}>
                        <p>{modelo.codigo} - {modelo.nome}</p>
                    </li>
                )))}
            </ul>
        </div>
        <button className="btn btn-primary" onClick={() => window.history.back()}>Voltar</button>
        </>
    )
}

export default Modelos