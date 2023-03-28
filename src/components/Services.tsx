import styled from "styled-components"
import { useState } from "react"
import { AiOutlineSearch, AiOutlinePlayCircle } from "react-icons/ai"
import { StyledButton } from "./Button"

export function Services() {

    const [showVideo, setShowVideo] = useState(false)
    return (
        <>
            <Left>
                <Image src="images/woman-tablet.png" showVideo={showVideo} />
                <Video
                    showVideo={showVideo}
                    autoPlay
                    loop
                    controls
                    src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
                />
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
                        <Button onClick={() => setShowVideo(!showVideo)}><PlayIcon />How it works</Button>
                    </footer>
                </Article>
            </Right>

        </>
    )
}

interface MediaProps {
    showVideo: boolean
}

const Left = styled.div`
    width: 50%;
    position: absolute;
    left: 0;
    bottom: 0;

`
const Image = styled.img`
    width: 80%;
    transition: opacity 0.5s ease-out;
    opacity: ${(props: MediaProps) => props.showVideo ? "0" : "1"}
`

const Video = styled.video` 
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: ${(props: MediaProps) => props.showVideo ?  "50%" :"-50%" };
    transition: left 0.5s ease-out;
    transform: translate(-50%, -50%);
    border-radius: 1rem;

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
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 1);

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

