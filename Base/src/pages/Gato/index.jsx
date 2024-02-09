
import { Container, DivBotao, Botao, VideoContainer, VideoFrame } from './style'
import { Link } from 'react-router-dom'

export function Gato() {
  return (
    <>
      <Container>
      <Container>
    <VideoContainer>
      <VideoFrame
        src="https://www.youtube.com/embed/dFO9tc9Za9g"
        frameBorder="0"
        allowFullScreen
      ></VideoFrame>
    </VideoContainer>
    <VideoContainer>
      <VideoFrame
        src="https://www.youtube.com/embed/Drxe_Bjv1eU"
        frameBorder="0"
        allowFullScreen
      ></VideoFrame>
    </VideoContainer>

    <VideoContainer>
      <VideoFrame
        src="https://www.youtube.com/embed/umqFOANbKOY"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></VideoFrame>
    </VideoContainer>
  </Container>

      </Container>
    
      
      <DivBotao>
        
      <Link to="/">
      <Botao>Voltar</Botao>
      </Link>

      </DivBotao>
    </>
  )
}
