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
    const [inputText, setInputText] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);
    let pages = [];

    //Determines how many images are on each page
    const numPerPage = 21;

    //Scroll to top of page when going through different pages
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [page])
    

    //Only filters images if text is inputted to the search bar
    const filteredData = imageData.filter(fd => {
        if (inputText === ''){
            return fd;
        } 
        else {
            return fd.tags.toLowerCase().includes(inputText);
        }
    })

    for(let i = 0; i < filteredData.length/numPerPage; i++){
        pages.push(i);
    }

    //Go back one page, unless on page 0
    const leftArrow = () => {
        if (page <= 0){
            navigate('/gallery/0')
        } else {
            navigate(`/gallery/${page - 1}`)
        }
    }

    //Go forward one page, unless on last page
    const rightArrow = () => {
        if (page >= pages.length - 1){
            navigate(`/gallery/${page}`)
        } else {
            navigate(`/gallery/${page * 1 + 1}`)
        }
    }

    const handleTextInput = e => {
        setInputText(e.target.value.toLowerCase())
        setButtonClicked(false);
        // Brings back to first page if user starts searching and isn't on the first page
        if (page !== 0){
            navigate('/gallery/0')
        }
    }

    const handleClick = searchTerm => {
        if (inputText === searchTerm && buttonClicked === true){
            setInputText('');
            setButtonClicked(false);
        } else {
            setButtonClicked(true);
            setInputText(searchTerm);
        }
        // Brings back to first page if user starts searching and isn't on the first page
        if (page !== 0){
            navigate('/gallery/0')
        }
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
            <div className="buttonWrapper">
                <button onClick={() => handleClick('pepel')} className="catButton">Pepels</button>
                <button onClick={() => handleClick('hashmonk')} className="catButton">Hashmonks</button>
                <button onClick={() => handleClick('3d')} className="catButton">3d Models</button>
                <button onClick={() => handleClick('faction')} className="catButton">Factions</button>
                <button onClick={() => handleClick('major')} className="catButton">Major Characters</button>
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

    .buttonWrapper{
        width: 60%;
        display: flex;
        justify-content: center;
    }

    .catButton{
        background: #f4f3ee;
        padding: 2.5%;
        border-radius: 20px;
        margin: 2.5%;
        color: #013a63;
        border: 3px solid #536f82;

        &:hover{
            cursor: pointer;
            box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.33);
        }
        &:active{
            box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.69);
        }
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
        .buttonWrapper{
            width: 75%;
            flex-wrap: wrap;
        }
        .catButton{
            width: 25%;
            padding: 3.75%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

`