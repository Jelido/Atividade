import React from 'react'
import { Paragrafo, ContainerBaixo, ContainerCima, Nomes } from './style'
import { Link } from 'react-router-dom'

export function Main() {
    return (
        <>
            <ContainerCima>
                
                <img src="petflix.png" alt="Logo" />

            </ContainerCima>

            <ContainerBaixo>
                <div>
                    <Link to="/cachorro">
                    <img src="cachorroburro.jpg" alt="Cachorro" />
                    </Link>
                    <Nomes>CachorroBurro</Nomes>
                </div>
                <div>
                    <Link to="/gato">
                    <img src="gatoburro.jpg" alt="Gato" />
                    </Link>
                    <Nomes>GatoBurro</Nomes>
                </div>
            </ContainerBaixo>
        </>
    )
}
