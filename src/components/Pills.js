import React, { useEffect } from "react";
import styled from "styled-components";
import PillAccordians from "./accordions/PillAccordians";

function Pills(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(
        <StyledGal>
            <section className="top">
                <div className="title">
                    <h1>Pillboosts</h1>
                </div>
                <div className="under">
                    <p>~ Choose wisely, anon ~</p>
                </div>
                <div className="callImg">
                    <img src="pillimages/genesiscube.png" alt="genesis" />
                </div>
                <div className="trans">
                    <div className="transWrapper">
                        <p> Below is a list of all publicly shared information about current pillboosts.
                            There are many details that are unknown to the community, and shared details
                            remain subject to change.
                        </p>
                    </div>
                </div>
            </section>
            <section className="accWrapper">
                <PillAccordians />
            </section>
        </StyledGal>
    )
}

export default Pills;

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

    @media (max-width: 550px){

        h1{
            font-size: 6rem;
        }

        p{
            font-size: 1.2rem;
        }

        .callImg{
            margin: 3%;
            width: 80%;
        }

        .under{
            margin-bottom: 2%;
        }

        .transWrapper{
            width: 80%;
            padding: 7.5%;
        }

        h2{
            font-size: 3rem;
        }
        
        .under{
            margin-bottom: 2%;
            width: 95%;
            text-align: center;
        }
    }
`