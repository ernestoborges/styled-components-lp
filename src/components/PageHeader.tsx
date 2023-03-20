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
                            <NavbarItem>Home</NavbarItem>
                            <NavbarItem>Features</NavbarItem>
                            <NavbarItem>Services</NavbarItem>
                            <NavbarItem>Pricing</NavbarItem>
                            <NavbarItem>Contact</NavbarItem>
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
// const JoinButton = styled.button`
//     color: var(--white);
//     background-color: var(--red);
//     padding: 1rem 2rem;
//     border: 0;
//     border-radius: 0.8rem;
//     font-weight: bold;
//     text-transform: uppercase;
//     font-size: 1.2rem;
// `