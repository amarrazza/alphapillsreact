import React from "react";
import styled from "styled-components";

const Image = props => {
    const { src, alt, text, id } = props.image

    return(
        <StyledDiv className="imageWrapper">
            <div className="image" id={`image${id}`}>
                <a href={src} target="blank_">
                    <img src={src} alt={alt} />
                </a>
            </div>
            <div className="imageText">
                <p>{text}</p>
            </div>
        </StyledDiv>
    )
}

export default Image;

const StyledDiv = styled.div`
    width: 30%;
    margin: 2.5% 1%;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;

    img{
        border: 4px solid #284b63;
    }

    .imageText{
        text-align: center;
        padding: 1%;
    }
`