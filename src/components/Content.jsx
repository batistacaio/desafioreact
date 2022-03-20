import { useState, useEffect } from 'react'
import { Accordion } from 'react-bootstrap'
import "../App.css"

function Content() {
    const [marcasCarro, setMarcasCarro] = useState([])
    const [marcasMoto, setMarcasMoto] = useState([])
    const [marcasCaminhao, setMarcasCaminhao] = useState([])

    useEffect(() => {
        fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
            .then(res => res.json())
            .then(data => setMarcasCarro(data))
    }, [])

    useEffect(() => {
        fetch("https://parallelum.com.br/fipe/api/v1/motos/marcas")
            .then(res => res.json())
            .then(data => setMarcasMoto(data))
    }, [])

    useEffect(() => {
        fetch("https://parallelum.com.br/fipe/api/v1/caminhoes/marcas")
            .then(res => res.json())
            .then(data => setMarcasCaminhao(data))
    }, [])

    return(
        <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Carros</Accordion.Header>
                <Accordion.Body>
                    <ul className="list-group">
                        {marcasCarro.map(marca => (
                            <li className="list-inline list-group-item" key={marca.codigo}>
                                <a className="text-decoration-none text-uppercase" href={`/carros/${marca.codigo}`}>{marca.nome}</a>
                            </li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Motos</Accordion.Header>
                <Accordion.Body>
                    <ul className="list-group">
                        {marcasMoto.map(marca => (
                            <li className="list-inline list-group-item" key={marca.codigo}>
                                <a className="text-decoration-none text-uppercase" href={`/motos/${marca.codigo}`}>{marca.nome}</a>
                            </li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Caminhões</Accordion.Header>
                <Accordion.Body>
                    <ul className="list-group">
                        {marcasCaminhao.map(marca => (
                            <li className="list-inline list-group-item" key={marca.codigo}>
                                <a className="text-decoration-none text-uppercase" href={`/caminhoes/${marca.codigo}`}>{marca.nome}</a>
                            </li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Content;