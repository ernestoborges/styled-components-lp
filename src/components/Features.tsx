import styled from "styled-components"
import { StyledButton } from "./Button"

export function Features() {
    return (
        <>
            <Right>
                <Article>
                    <header>
                        <h2><span>good</span> design <br /><span>good</span> business</h2>
                        <h3>We know that good design means good business</h3>
                    </header>
                    <section>
                        <p>
                            We help our clients succeed by creating brand identities, digital experiences, and print materials that comunicate clearly, achieve marketin goals, and look fantastic.
                        </p>
                        <p>
                            We care your business and guarantee you to achive marketing goals.
                        </p>
                    </section>
                    <footer>
                        <Button>
                            Learn More
                        </Button>
                    </footer>
                </Article>
            </Right>
            <Image src="src/assets/images/app.png" />
            <Shape />
        </>
    )
}

const Right = styled.div`
    width: 50%;
    position: absolute;
    right 0;
`

const Article = styled.article`

    max-width: 54rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    & > header {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        & > h2 {
            font-size: 6rem;
            font-weight: normal;

            & > span {
                font-size: 6rem;
                font-weight: bold;

            }
        }

        & > h3 {
            font-size: 2rem;
            font-weight: normal;
            font-style: italic
        }
    }

    & > section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        font-size: 2rem;
        font-weight: normal;
        color: var(--gray);
    }
`
const Button = styled(StyledButton)`
    background-color: var(--blue);
    padding: 1.6rem 2rem;
    border-radius: 2rem;
    text-transform: capitalize;
    font-weight: normal;
    font-size: 1.6rem;
`

const Shape = styled.div`
    background-color: var(--pink);
    position: absolute;
    top: 0;
    left: 0;
    width: 55%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0% 100%)
`

const Image = styled.img`
    width: 46%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
`