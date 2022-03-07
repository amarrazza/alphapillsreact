import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {  TwitterFollowButton } from 'react-twitter-embed';

function Footer(){
    let navigate = useNavigate();
    return(
        <StyledFooter>
            <div className='footerWrapper'>
                <div className="links">
                    <Link className='link' to='/pills'>Pills</Link>
                    <Link className='link' to="/gallery/0">Gallery</Link>
                    <Link className='link' to='/calls'>Calls</Link>
                    <Link className='link' to='/links'>Links</Link>
                </div>
                <div className='logodiv'>
                    <img src='../pillimages/pills-logo-gold.png' alt='pills logo' className='logo'
                        onClick={() => navigate('/')}/>
                </div>
                <div className='tembeds'>
                    <TwitterFollowButton
                        screenName={'pillsuniverse'}
                        className='tembed'
                    />
                    <TwitterFollowButton
                        screenName={'pillheadddd'}
                        className='tembed'
                    />
                    <TwitterFollowButton
                        screenName={'threeswordscap'}
                        className='tembed'
                    />
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;

const StyledFooter = styled.footer`

    padding: 3% 5% 3%;
    background-color: #f4f3ee;
    display: flex;
    justify-content: center;
    a{
        text-decoration: none;
        color: darkslategray;
        font-size: 2rem;
        margin: 4%;
    }
    .links{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 33%;
        padding-left: 10%;
    }
    .footerWrapper{
        display: flex;
        justify-content: space-evenly;
        width: 75%;
    }
    .logodiv{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo{
        width: 65%;
        &:hover{
            cursor: pointer;
        }
    }    
    
    @media (max-width: 550px){
        padding: 5% 2% 10%;
        .footerWrapper{
            flex-direction: column;
            width: 90%;
        }
        .logo{
            width: 45%;
            margin-bottom: 5%;
        }
        .links{
            display: none;
        }
    }
`