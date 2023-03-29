import styled from "styled-components";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Home } from "./components/Home";
import { PageHeader } from "./components/PageHeader";
import { Prices } from "./components/Prices";
import { Services } from "./components/Services";


export function App() {

  return (
    <div className="App">
      <PageHeader />
      <Container>
        <Home />
      </Container>
      <Container>
        <Features />
      </Container>
      <Container>
        <Services />
      </Container>
      <Container>
        <Prices />
      </Container>
      <Container>
        <Contact />
      </Container>

    </div>
  )
}

const Container = styled.section`
  height: 100vh;
  padding: 2rem;
  padding-top: 6rem;
  display: flex;
  align-items: center;
  position: relative;
`

