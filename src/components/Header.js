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
                    <Link to='/pills'>Links</Link>
                </div>
            </nav>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.header`

    margin-bottom: 5%;

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
        background-color: rgba(255, 255, 255);
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


`