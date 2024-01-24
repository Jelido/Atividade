
import { Container, DivBotao, Botao } from './style'
import { Link } from 'react-router-dom'

export function Cachorro() {
  return (
    <>
      <Container>
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Vsvf-MgxMew"
        frameBorder="0"
        allowFullScreen
      ></iframe>

        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/m9BAW6Zby98"
        title="YouTube video player"
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
