import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import {  TwitterFollowButton } from 'react-twitter-embed';

function Footer(){
    let navigate = useNavigate();
    return(
        <StyledFooter>
            <div className='footerWrapper'>
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

                <div className='logodiv'>
                    <img src='../pillimages/pills-logo-gold.png' alt='pills logo' className='logo'
                        onClick={() => navigate('/')}/>
                </div>
                <div className="links">
                    <Link to='/pills'>Pills</Link>
                    <Link to="/gallery/0">Gallery</Link>
                    <Link to='/calls'>Calls</Link>
                    <Link to='/links'>Links</Link>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;

const StyledFooter = styled.footer`

    padding: 2% 5% 2%;
    background-color: #f4f3ee;
    display: flex;
    justify-content: center;
    a{
        text-decoration: none;
        color: darkslategray;
        font-size: 2rem;
        margin: 3%;
    }
    .links{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 33%;
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
    
`