import React, { useEffect } from "react";
import styled from "styled-components";
import CallAccordions from "./accordions/CallAccordians";

function Calls(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(
        <StyledGal>
            <section className="top">
                <div className="title">
                    <h1>Community Calls</h1>
                </div>
                <div>
                    <p>Every Thursday at 18:00 UTC</p>
                </div>
                <div className="callImg">
                    <img src="pillimages/engravings.png" alt="genesiss " />
                </div>
                <div className="trans">
                    <div className="transWrapper">
                        <p> Community calls are noteworthy events held once a week when people from different corners of
                            the world gather to discuss project updates and host brainstorming sessions
                            where YOU can help create the nomenclature, lore, and vibes of the universe,
                            just to name a few examples.
                        </p>
                    </div>
                </div>
            </section>
            <section className="accWrapper">
                <CallAccordions />
            </section>
        </StyledGal>
    )
}

export default Calls;

const StyledGal = styled.div`

    .top{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .callImg{
        width: 60%;
        margin: 2%;
    }
    .trans{
        display: flex;
        justify-content: center;
        margin-top: 5%

    }   

    .transWrapper{
        width: 50%;
        text-align: center;
        background-color: #f4f3ee;
        color: #013a63;
        padding: 4%;
        border-radius: 40px;
    }

    img{
        border: 5px solid #284b63;
    }
`