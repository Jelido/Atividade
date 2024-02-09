
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
        
        allowFullScreen
      ></VideoFrame>
    </VideoContainer>
    <VideoContainer>
      <VideoFrame
        src="https://www.youtube.com/embed/Drxe_Bjv1eU"
        
        allowFullScreen
      ></VideoFrame>
    </VideoContainer>

    <VideoContainer>
      <VideoFrame
        src="https://www.youtube.com/embed/umqFOANbKOY"
        title="YouTube video player"
        
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
