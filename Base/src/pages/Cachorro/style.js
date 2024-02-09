import styled from 'styled-components'

export const ContainerBaixo = styled.div`
  background-color: black;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`


export const DivBotao = styled.div`
  background-color: black;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Botao = styled.button`
  background-color: #e50914;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #9f050c;
  }
`
export const VideoContainer = styled.div`
    width: 560px;
    height: 315px;
    margin: 0;
`
export const VideoFrame = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`