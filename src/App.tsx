import styled from "styled-components";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Home } from "./components/Home";
import { PageFooter } from "./components/PageFooter";
import { PageHeader } from "./components/PageHeader";
import { Prices } from "./components/Prices";
import { Services } from "./components/Services";


export function App() {

  return (
    <div className="App">
      <PageHeader />
      <Container id="home">
        <Home />
      </Container>
      <Container id="features">
        <Features />
      </Container>
      <Container id="services">
        <Services />
      </Container>
      <Container id="prices">
        <Prices />
      </Container>
      <Container id="contact">
        <Contact />
      </Container>
      <PageFooter />
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

