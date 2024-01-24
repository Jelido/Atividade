import styled from 'styled-components'

export const Paragrafo = styled.h1`
    color: red;
    font-size: 60px;
    margin: 0;
    border: 0;
    font-family: 'Netflix Sans', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`

export const Nomes = styled.h1`
    color: gray;
    font-size: 24px;
    margin-left: 65px;
    font-family: 'Netflix Sans', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`



export const ContainerCima = styled.div`
    background-color: black;
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        margin-bottom: 10px; 
        margin-left: 60px;
        border-radius: 8px;
    }
`

export const ContainerBaixo = styled.div`
    background-color: black;
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 200px; 
    }

    img {
        margin-bottom: 10px; 
        margin-left: 50px;
        width: 200px;
        height: 170px;
        border-radius: 8px;

        &:hover {
            border: 2px solid white;
        }

    }
`
