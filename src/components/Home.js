import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate }  from "react-router-dom";
import FaqAccordians from "./accordions/FaqAccordians";

function Home(){
    
    let navigate = useNavigate();

    //Brings user to top of page if coming from a different page
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(
        <StyledGal>
            <section className="top">
                <div className="title">
                    <h1>Alpha Pills</h1>
                </div>
                <div className="under">
                    <p>~ Building Chainspace as a community, block by block ~</p>
                </div>
                <div className="homeImage" >
                    <img src="pillimages/vitalikleak.jpeg" alt="genesis" />
                </div>
                <div className="trans">
                    <div className="transWrapper">
                        <p> Alpha Pills is meant to serve as a community hub and archive for all things related to Pills Universe.
                            If there's anything you'd like to see or believe is missing, please don't hesitate to
                            reach out.
                        </p>
                    </div>
                </div>
                <div className="catContainer">
                    <div className="catWrapper">
                        <div className="cat" onClick={() => navigate('/pills')}>
                            <div className="catImage">
                                <img src="pillimages/genesiscubecropped.png" alt="" />
                            </div>
                            <div className="catText">
                                <h2>Pillboosts</h2>
                            </div>
                        </div>
                        <div className="cat" onClick={() => navigate('/gallery/0')}>
                            <div className="catImage">
                                <img src="pillimages/genvoidcropped.png" alt="genesis cube" />
                            </div>
                            <div className="catText">
                                <h2>Gallery</h2>
                            </div>
                        </div>
                        <div className="cat" onClick={() => navigate('/calls')}>
                            <div className="catImage">
                                <img src="pillimages/engravingscropped.png" alt="engravings" />
                            </div>
                            <div className="catText">
                                <h2>Community Calls</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="accWrapper">
                <h1 className="faq">FAQ</h1>
                <FaqAccordians />
            </section>
        </StyledGal>
    )
}

export default Home;

const StyledGal = styled.div`
    h1{
        font-family: 'Lalezar', sans-serif;
        font-size: 12.5rem;
    }
    .faq{
        font-family: 'Arvo', monospace;
    }
    .top{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .homeImage{
        width: 75%;
        margin: 2%;
    }

    .catContainer{
        width:100%;
        margin-top: 5%;
    }
    .catWrapper{
        display: flex;
        justify-content: center;
    }

    .homeImage img{
        border: 5px solid #284b63;
    }

    .cat{
        background-color: transparent;
        width: 26%;
        margin: 2%;
        border-radius: 30px;

        &:hover{
            cursor: pointer;
            box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.33);
        }
        &:active{
            box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.69);
        }
    }


    .catImage{
        background-color: #f4f3ee;
        border-radius: 30px 30px 0 0;
    }

    .catImage img{
        border-radius: 30px 30px 0 0;
    }

    .catText{
        background-color: #f4f3ee;
        color: #013a63;
        display: flex;
        justify-content: center;
        padding: 7% 1% 8% 1%;
        border-radius: 0 0 30px 30px;
        text-align: center;
    }

    h2{
        font-size: 3.5rem;
        
    }

    .accWrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
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

    @media (max-width: 550px){

        .catWrapper{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 10%;
        }

        .cat{
            width: 75%;
            margin: 4%;
        }

        h1{
            font-size: 6rem;
        }

        p{
            font-size: 1.2rem;
        }

        .homeImage{
            margin: 3%;
            width: 85%;
        }

        .under{
            margin-bottom: 2%;
            width: 95%;
            text-align: center;
        }

        .transWrapper{
            width: 80%;
            padding: 7.5%;
        }

        h2{
            font-size: 3rem;
        }
    }
`