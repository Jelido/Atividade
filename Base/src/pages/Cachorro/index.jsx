
import { Container, DivBotao, Botao,VideoContainer, VideoFrame } from './style'
import { Link } from 'react-router-dom'

export function Cachorro() {
  return (
    <>
  <Container>
    <VideoContainer>
      <VideoFrame
        src="https://www.youtube.com/embed/Vsvf-MgxMew"
        frameBorder="0"
        allowFullScreen
      ></VideoFrame>
    </VideoContainer>

    <VideoContainer>
      <VideoFrame
        src="https://www.youtube.com/embed/m9BAW6Zby98"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></VideoFrame>
    </VideoContainer>
  </Container>
      
    <DivBotao>
        
      <Link to="/">
      <Botao>Voltar</Botao>
      </Link>

    </DivBotao>
    </>
  )
}
