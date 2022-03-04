import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Image from "./Image";
import imageData from "../imageData/galleryImages";

const Images = () => {
    let { page } = useParams()
    return(
        <StyledDiv className="imagesContainer">
            {imageData.slice(page * 2, page * 2 + 2).map(image => {
                return(
                    <Image image={image} key={image.id}/>
                )
            })}
        </StyledDiv>
    )
}

export default Images;

const StyledDiv = styled.div`
    margin: 2%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: flex-start;
`