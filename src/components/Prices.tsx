import styled from "styled-components"
import { StyledButton } from "./Button"
import { BsCheckLg, BsXLg } from "react-icons/bs"
import { IoClose } from "react-icons/io5"

export function Prices() {

    const priceList = [
        {
            id: 1,
            price: 10,
            plan_type: "basic",
            plan_services: {
                handcrafted_templates: true,
                exclusive_support: false,
                prebuilt_websites: false,
                premium_plugins: false
            }
        },
        {
            id: 2,
            price: 20,
            plan_type: "premium",
            plan_services: {
                handcrafted_templates: true,
                exclusive_support: false,
                prebuilt_websites: true,
                premium_plugins: true
            }
        },
        {
            id: 3,
            price: 30,
            plan_type: "advanced",
            plan_services: {
                handcrafted_templates: true,
                exclusive_support: true,
                prebuilt_websites: true,
                premium_plugins: true
            }
        },
    ]

    return (
        <>
            <ListContainer>
                <PriceList>
                    {
                        priceList.map(item => <>
                            <PriceItem key={item.id}>
                                <article>
                                    <header>
                                        <p>$<span>{item.price}</span>/month</p>
                                        <h2>{item.plan_type} plan</h2>
                                    </header>
                                    <section>
                                        <ul>
                                            <li>
                                                <span>{item.plan_services.handcrafted_templates ? <CheckIcon /> : <CrossIcon />}</span>
                                                <span
                                                    className={item.plan_services.handcrafted_templates ? "" : "crossed"}
                                                >200 Hand-Crafted Templates</span></li>
                                            <li>
                                                <span>{item.plan_services.prebuilt_websites ? <CheckIcon /> : <CrossIcon />}</span>
                                                <span
                                                    className={item.plan_services.prebuilt_websites ? "" : "crossed"}
                                                >50+ PreBuilt Websites</span>
                                            </li>
                                            <li>
                                                <span>{item.plan_services.premium_plugins ? <CheckIcon /> : <CrossIcon />}</span>
                                                <span
                                                    className={item.plan_services.premium_plugins ? "" : "crossed"}
                                                >Premium Plugins</span>
                                            </li>
                                            <li>
                                                <span>{item.plan_services.exclusive_support ? <CheckIcon /> : <CrossIcon />}</span>
                                                <span
                                                    className={item.plan_services.exclusive_support ? "" : "crossed"}
                                                >Exclusive Support</span>
                                            </li>
                                        </ul>
                                    </section>
                                    <footer>
                                        <Button>Join Now</Button>
                                    </footer>
                                </article>
                            </PriceItem>
                        </>)
                    }
                </PriceList>
            </ListContainer>
            <Shape />
        </>
    )
}

const Shape = styled.div`
    background-color: var(--red);
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    clip-path: polygon(35% 0, 100% 0, 100% 100%, 68% 100%)
`

const ListContainer = styled.div`
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`
const PriceList = styled.ul`
    display: flex;
    justify-content: space-between;
    gap: 5rem;
`

const PriceItem = styled.li`
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 1);
    background-color: var(--white);
    border-radius: 1rem;

    & > article {
        height: 100%;
        padding: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 4rem;

        & > header {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            & > p {
                display: flex;
                align-items: center;
                font-weight: bold;
                font-size: 2rem;

                & > span {
                    font-size: 5rem;
                }
            }

            & > h2 {
                border-radius: 4rem;
                border: 0.2rem solid var(--red);
                color: var(--red);
                text-transform: capitalize;
                font-weight: 300;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.6rem;
            }
        }

        & > section {
            & > ul {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                & > li {
                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    & > span {
                        display: flex;
                        align-items: center;
                    }

                    & > .crossed {
                        text-decoration: line-through;
                    }
                }
            }
        }
    }

`
const CheckIcon = styled(BsCheckLg)`
    color: var(--green);
    font-size: 3rem;

`

const CrossIcon = styled(IoClose)`
    color: var(--red);
    font-weight: bold;
    font-size: 3rem;

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