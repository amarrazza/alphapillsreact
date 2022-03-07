import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

function Header(){
    let navigate = useNavigate();
    return(
        <StyledHeader>
             <nav>
                <div className="links">
                    <Link to='/pills'>Pills</Link>
                    <Link to="/gallery/0">Gallery</Link>
                    <img src='../pillimages/pills-logo-gold.png' alt='pills logo' className='logo'
                        onClick={() => navigate('/')}/>
                    <Link to='/calls'>Calls</Link>
                    <Link to='/links'>Links</Link>
                </div>
            </nav>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.header`
    margin-bottom: 5%;
    display: flex;
    justify-content: center;
    width: 100%;
    a{
        text-decoration: none;
        color: darkslategray;
        font-size: 2.5rem;
    }
    nav{
        display: flex;
        justify-content: center;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 999; /* everything should scroll behind this*/
        background-color: rgba(255, 255, 255, 0.97);
        height: 77.5px;
    }
    .links{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 0;
        padding: 1.5%;
        width: 30%;
    }

    .logo{
        width: 16%;
        &:hover{
            cursor: pointer;
        }
    }

    @media (max-width: 1350px){
        .links{
            width: 40%;
        }
        .logo{
            width: 12%;
        }
    }

    @media (max-width: 900px){
        margin-bottom: 8%;
        .links{
            width: 60%;
        }

    }

    @media (max-width: 550px){
        margin-bottom: 18%;
        .links{
            width: 90%;

        }
        a{
            font-size: 2.2rem;
        }
    }

`