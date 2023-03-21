import styled from "styled-components"
import {useState} from "react"
import { AiOutlineSearch, AiOutlinePlayCircle } from "react-icons/ai"
import { StyledButton } from "./Button"

export function Services() {

    const [showVideo, setShowVideo] = useState(false)
    return (
        <>
            <Left>
                <Image src="images/woman-tablet.png" hide={showVideo} />
                <Video />
            </Left>
            <Right>
                <Article>
                    <header>
                        <h2>Simple process to start</h2>
                    </header>
                    <section>
                        <p>
                            We provide digital experience services to startups and small business to looking for a partner of their digital media, design & development, lead generation and communications requirents. We work with your,  not for you. Although we have a great resources.
                        </p>
                    </section>
                    <section>
                        <ServicesList>
                            <ServicesItem><SearchIcon />lorem ipsum dolor sit amet consectetur.</ServicesItem>
                            <ServicesItem><SearchIcon />lorem ipsum dolor sit amet consectetur.</ServicesItem>
                            <ServicesItem><SearchIcon />lorem ipsum dolor sit amet consectetur.</ServicesItem>
                        </ServicesList>
                    </section>
                    <footer>
                        <Button onClick={()=>setShowVideo(!showVideo)}><PlayIcon />How it works</Button>
                    </footer>
                </Article>
            </Right>

        </>
    )
}

const Left = styled.div`
    width: 50%;
    position: absolute;
    left: 0;
    bottom: 0;

`
const Image = styled.img`
    width: 80%;
    transition: opacity 0.5s;
    opacity: ${(props)=> props.hide ? "0" : "1"}
`

const Right = styled.div`
    width: 50%;
    position: absolute;
    right: 0;
`

const Article = styled.article`
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    & > header h2 {
        font-size: 4rem;
    }

    & > section p {
        color: var(--gray);
        font-size: 2rem;
    }
`
const ServicesList = styled.ul`
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 6rem;
`
const ServicesItem = styled.li`
    font-weight: bold;
    text-align: center;
    border-radius: 1rem;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap: 2rem;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
`

const SearchIcon = styled(AiOutlineSearch)`
    color: var(--gray);
    font-size: 3rem;
`

const PlayIcon = styled(AiOutlinePlayCircle)`
    font-size: 2.6rem;

`

const Button = styled(StyledButton)`

    background-color: var(--blue);
    text-transform: none;
    font-size: 1.6rem;
    padding: 1.6rem;
    display: flex;
    align-items: center;
    gap: 1rem;

`

