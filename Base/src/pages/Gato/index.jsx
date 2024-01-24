
import { Container, DivBotao, Botao } from './style'
import { Link } from 'react-router-dom'

export function Gato() {
  return (
    <>
      <Container>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dFO9tc9Za9g"
        frameBorder="0"
        allowFullScreen
      ></iframe>

        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/umqFOANbKOY"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      </Container>
    
      
      <DivBotao>
        
      <Link to="/">
      <Botao>Voltar</Botao>
      </Link>

      </DivBotao>
    </>
  )
}
