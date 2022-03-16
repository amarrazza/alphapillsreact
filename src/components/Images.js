import React, { useEffect, useState } from "react";
import { TextField } from '@mui/material';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useNavigate }  from "react-router-dom";
import Image from "./Image";
import imageData from "../imageData/galleryImages";

const Images = () => {
    let { page } = useParams();
    let navigate = useNavigate();
    const [inputText, setInputText] = useState("")
    let pages = [];
    const numPerPage = 21;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [page])

    const filteredData = imageData.filter(fd => {
        if (inputText === ''){
            return fd;
        } 
        else {
            return fd.text.toLowerCase().includes(inputText);
        }
    })

    for(let i = 0; i < filteredData.length/numPerPage; i++){
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

    const handleTextInput = e => {
        setInputText(e.target.value.toLowerCase())
    }

    return(
        <StyledDiv className="imagesContainer">
            <div className="searchWrapper">
                <TextField
                    id="standard-basic"
                    variant="standard"
                    onChange={handleTextInput}
                    fullWidth
                    label="Searching Chainspace..."
                    InputLabelProps={{
                        style: {
                            fontSize: '1.2rem',
                            overflow: 'hidden',
                        }
                    }}
                    />
            </div>
            <div className="imagesWrapper">
                {filteredData.slice(page * numPerPage, page * numPerPage + numPerPage).map(image => {
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
        flex-flow: row wrap;
        justify-content: center;
        width: 40%;
    }
    .pageNum{
        margin: 2.5% 2%;
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
    @media (max-width: 550px){

        .pageNav{
            width: 80%;
        }

        .pageNav p{
            font-size: 2rem;
        }
        .pageNum{
            margin: 2.5% 2%;
        }
    }

`