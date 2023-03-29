import styled from "styled-components"
import { StyledButton } from "./Button"
import {useState} from "react";

export function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert(`
            name: ${name}
            email: ${email}
            subject: ${subject}
            message: ${message}
        `)
    }

    return (
        <>
            <Container>
                <Left>
                    <h2>Questions?<br />Let's Get In Touch</h2>
                    <form id="contact-form" onSubmit={ event => handleSubmit(event)}>
                        <div>
                            <Input onChange={(e)=>setName(e.target.value)} name="Name" placeholder="Your Name" />
                            <Input onChange={(e)=>setEmail(e.target.value)} name="Email" placeholder="Your Email" />
                            <Input onChange={(e)=>setSubject(e.target.value)} name="Subject" placeholder="Subject" />
                        </div>
                        <div>
                            <TextArea onChange={(e)=>setMessage(e.target.value)} name="Message" placeholder="Your Message" />
                            <Button>Send</Button>
                        </div>
                    </form>
                </Left>
                <Right>
                    <List>
                        <ListItem>
                            <span><Icon src="src/assets/images/map.png" /></span>
                            <span>123 Park Avenue St., New York, USA</span>
                        </ListItem>
                        <ListItem>
                            <span><Icon src="src/assets/images/phone.png" /></span>
                            <span><span>+1 631 1234 5678</span><span>+1 326 1234 5678</span></span>
                        </ListItem>
                        <ListItem>
                            <span><Icon src="src/assets/images/send.png" /></span>
                            <span><span>contact@ernesto.dev</span><span>sales@ernesto.dev</span></span>
                        </ListItem>
                    </List>
                </Right>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10rem;
    background: url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png");
`

const Left = styled.div`

    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    & > h2 {
        font-size: 3rem;
        font-weight: bold;
    }

    & > form {
        width: 100%;
        display: flex;
        gap: 2rem;

        & > div {
            width: 25rem;
            display: flex;
            flex-direction: column;
            gap: 2rem
        }
    }
`

const Right = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Input = styled.input`
    padding: 2rem;
    border: 0.1rem solid var(--gray);
    border-radius: 0.4rem;
`
const TextArea = styled.textarea`
    flex-grow: 1;
    padding: 2rem;
    border: 0.1rem solid var(--gray);
    border-radius: 0.4rem;
`

const Button = styled(StyledButton)`
    padding: 2rem;
    border: 0.1rem solid transparent;
    text-transform: capitalize;
    font-size: 1.6rem;
`

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 2rem;

    & > span {
        display: flex;
        gap: 2rem;
    }
`

const Icon = styled.img`
    width: 2rem;
`