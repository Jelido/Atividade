
import { ContainerBaixo, DivBotao, Botao, VideoContainer, VideoFrame } from './style'
import { Link } from 'react-router-dom'

export function Cachorro() {
  return (
    <>
    

    
  <ContainerBaixo>
    <VideoContainer>
      <VideoFrame
        src="https://www.youtube.com/embed/Vsvf-MgxMew"
        
        allowFullScreen
      ></VideoFrame>
    </VideoContainer>

    <VideoContainer>
      <VideoFrame
        src="https://www.youtube.com/embed/m9BAW6Zby98"
        title="YouTube video player"
        
        allowFullScreen
      ></VideoFrame>
    </VideoContainer>
  </ContainerBaixo>
      
    <DivBotao>
        
      <Link to="/">
      <Botao>Voltar</Botao>
      </Link>

    </DivBotao>
    </>
  )
}
