import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate }  from "react-router-dom";
import Image from "./Image";
import imageData from "../imageData/galleryImages";

const Images = () => {
    let { page } = useParams()
    let navigate = useNavigate();
    let pages = []
    for(let i = 0; i < imageData.length/2; i++){
        pages.push(i);
    }
    const leftArrow = () => {
        if (page <= 0){
            navigate('/gallery/0')
        } else {
            navigate(`/gallery/${page - 1}`)
        }
    }

    const rightArrow = () => {
        if (page >= pages.length - 1){
            navigate(`/gallery/${page}`)
        } else {
            navigate(`/gallery/${page * 1 + 1}`)
        }
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
                <p className="arrow" onClick={() => leftArrow()}>&#8592;</p>
                {pages.map(singlePage => {
                    return <p key={singlePage} className="pageNum" onClick={() => navigate(`/gallery/${singlePage}`)}>{singlePage}</p>
                })}
                <p className="arrow" onClick={() => rightArrow()}>&#8594;</p>
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
        width: 20%;
    }
    .pageNum{
        margin: 2.5%;
        &:hover{
            cursor: pointer;
        }
    }

    .arrow{
        display: flex;
        align-items: center;
        margin: 2.5% 5%;
        &:hover{
            cursor: pointer;
        }
    }

`