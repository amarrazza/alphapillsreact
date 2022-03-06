import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Image from "./Image";
import imageData from "../imageData/galleryImages";

const Images = () => {
    let { page } = useParams()
    let pages = []
    for(let i = 0; i < imageData.length/2; i++){
        pages.push(i);
    }
    return(
        <StyledDiv className="imagesContainer">
            <div className="imagesWrapper">
                {imageData.slice(page * 2, page * 2 + 2).map(image => {
                    return(
                        <Image image={image} key={image.id}/>
                    )
                })}
            </div>
            <div className="pageNav">
                <p className="arrow">&#8592;</p>
                {pages.map(page => {
                    return <p className="pageNum">{page}</p>
                })}
                <p className="arrow">&#8594;</p>
            </div>
        </StyledDiv>
    )
}

export default Images;

const StyledDiv = styled.div`
    margin: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .imagesWrapper{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: flex-start;
    }

    .pageNav{
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        width: 10%;
    }
    .pageNum{
        margin: 2.5%;
    }

    .arrow{
        display: flex;
        align-items: center;
        margin: 2.5% 5%;
    }

`