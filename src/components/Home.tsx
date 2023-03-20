import styled from "styled-components"
import { StyledButton } from "./Button"

export function Home() {
    return (
        <>
            <Wrapper>
                <Header>
                    Adventures in creative age
                </Header>
                <Section>
                    We believe that designing products and services in close partnership with our clients is the only way to have a real impact on their business.
                </Section>
                <Footer>
                    <Button>
                        start a project
                    </Button>
                    <FooterInfo>
                        <Span>{"Call Us (012) 345 - 6789"}</Span>
                        <Span>For any question or concern</Span>
                    </FooterInfo>
                </Footer>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.article`
    display: flex; 
    flex-direction: column;
    max-width: 50rem;
    gap: 4rem;
`

const Header = styled.header`
    font-size: 6rem;     
    font-weight: bold
`

const Section = styled.section`
    font-weight: bold;
    font-size: 2rem;

`

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Button = styled(StyledButton)`
    background-color: var(--blue);
    letter-spacing: 0.2rem;
    padding: 1.4rem
`

const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`
const Span = styled.span`
    color: var(--gray);
    &:first-child {
        color: var(--red);
        font-weight: bold
    }
`