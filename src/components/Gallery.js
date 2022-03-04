import React, { useEffect } from "react";
import styled from "styled-components";
import Images from "./Images";

function Gallery(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(
        <StyledGal>
            <section className="top">
                <div className="title">
                    <h1>The Crypt</h1>
                </div>
                <div>
                    <p>~ Right Click Saving every piece of PILLS art shared thus far ~</p>
                </div>
                <div className="galImg">
                    <img src="../pillimages/genvoidcropped.png" alt="genesis" />
                </div>
                <div className="trans">
                    <p>~ Art transmissions below ~</p>
                </div>
            </section>
            <section className="imageWrapper">
                <Images />
            </section>
        </StyledGal>
    )
}

export default Gallery;

const StyledGal = styled.div`

    .top{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .galImg{
        width: 60%;
        margin: 2%;
    }
    .trans{
        margin-bottom: 5%;
    }
    img{
        border: 5px solid #284b63;
    }
`