import styled from "styled-components"
import { StyledButton } from "./Button"

export function PageHeader() {
    return (
        <>
            <Container>
                <Left>
                    <Logo>
                        Agency
                    </Logo>
                    <nav>
                        <NavbarList>
                            <NavbarItem><a href="#home">Home</a></NavbarItem>
                            <NavbarItem><a href="#features">Features</a></NavbarItem>
                            <NavbarItem><a href="#services">Services</a></NavbarItem>
                            <NavbarItem><a href="#prices">Pricing</a></NavbarItem>
                            <NavbarItem><a href="#contact">Contact</a></NavbarItem>
                        </NavbarList>
                    </nav>
                </Left>
                <StyledButton>
                    join today
                </StyledButton>
            </Container>
        </>
    )
}


const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    padding: 0.4rem 2rem;
    font-weight: bold;
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.a`
    font-size: 4rem;
    text-decoration: underline var(--red);
    cursor: pointer;
`

const NavbarList = styled.ul`
    list-style: none;
    display: flex;
    gap: 4rem;
`
const NavbarItem = styled.li`
    color: var(--gray);
    cursor: pointer;
    border-bottom: 0.2rem solid transparent;
    padding-bottom: 0.1rem;
    &:hover {
        border-bottom: 0.2rem solid var(--gray);
    }
`