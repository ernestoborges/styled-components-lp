import styled from "styled-components"

export function PageFooter() {
    return (
        <>
            <Container>
                <List>
                    <ListItem><span>Guide</span></ListItem>
                    <ListItem><span>Support</span></ListItem>
                    <ListItem><span>API</span></ListItem>
                    <ListItem><span>Community</span></ListItem>
                </List>
                <span>
                    ernesto ©
                </span>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--black);
    padding: 2rem;

    & span {
        color: var(--white);
    }
`

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`

const ListItem = styled.li`
    cursor: pointer;
    & :hover {
        text-decoration: underline
    }
`