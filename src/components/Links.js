import React, { useEffect } from "react";
import styled from "styled-components";

function Links(){

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(
        <StyledGal>
            <section className="top">
                <div className="title">
                    <h1>Resources</h1>
                    <p>~ Below are all official links for Pills Universe, please verify in official Discord ~</p>
                </div>
                <div className="resources">
                    <div className="resourceImage"> 
                        <img src="pillimages/memrat.png" alt="memrat" />
                    </div>
                    <div className="resourceLinks">
                        <h3>Twitter: &nbsp;&nbsp;<a href="https://twitter.com/pillsuniverse" target="_blank" rel="noreferrer">
                            https://twitter.com/pillsuniverse</a></h3>
                        <h3>Discord: &nbsp;&nbsp;<a href="https://discord.com/invite/pillsuniverse" target="_blank" rel="noreferrer">
                            https://discord.com/invite/pillsuniverse</a></h3>
                        <h3>OpenSea Collection: &nbsp;&nbsp;<a href="https://storymode.pills.forsale/tools/" target="_blank" rel="noreferrer">
                            https://storymode.pills.forsale/tools/</a></h3>
                        <br />
                        <h3>Pill Checker: &nbsp;&nbsp;<a href="https://www.pills.forsale/" target="_blank" rel="noreferrer">
                            https://www.pills.forsale/</a></h3>
                        <h3>Portalpill Claim and Distro: &nbsp;&nbsp;<a href="https://www.pills.game/" target="_blank" rel="noreferrer">
                            https://www.pills.game/</a></h3>
                        <h3>Portalpill Distro Guide: &nbsp;&nbsp;<a href="https://pills.mirror.xyz/k523kW3NVSLjgfTV6y4Kf6ayaSq97U3CvA0MW0qiAWs" target="_blank" rel="noreferrer">
                            https://pills.mirror.xyz/</a></h3>
                        <br />
                        <h3>Pills Story Mode: &nbsp;&nbsp;<a href="https://storymode.pills.forsale/" target="_blank" rel="noreferrer">
                            https://storymode.pills.forsale/</a></h3>
                        <h3>Lore Collaboration Projects: &nbsp;&nbsp;<a href="https://storymode.pills.forsale/tools/" target="_blank" rel="noreferrer">
                            https://storymode.pills.forsale/tools/</a></h3>
                    </div>
                </div>
            </section>
        </StyledGal>
    )
}

export default Links;

const StyledGal = styled.div`

    .title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h3{
        font-size: 2.5rem;
    }

    .resources{
        display: flex;
        justify-content: space-around;
        margin: 2% 5%;

    }

    .resourceLinks{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 2.5%;

    }

    a{
        color: #fbfffb;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
        }
    }
`