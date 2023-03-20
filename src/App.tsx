import styled from "styled-components";
import { Home } from "./components/Home";
import { PageHeader } from "./components/PageHeader";


export function App() {

  return (
    <div className="App">
      <PageHeader />
      <Container>
        <Home />
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

`

