import React, { useState } from "react";
import styled from "styled-components";
import { TwitterTweetEmbed } from 'react-twitter-embed';
// import {  TwitterFollowButton, TwitterTweetEmbed } from 'react-twitter-embed';

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};
const pillAccordions = () => (
  <StyledGal className="wrapper">
    <Accordion title="Mirrorpill">
        <div>
            <p>Boost type: Left Arm Wearable</p>
            <p>Distribution:</p>
            <div className="tembed"><TwitterTweetEmbed tweetId={'1382396240114159616'}/></div>
        </div>
    </Accordion>
    <Accordion title="Shadowpak">
        <div>
            <p>Boost type: Shadowmarked Trait + Wearable + Shadowpakt Faction Membership</p>
            <p>Alpha:</p>
            <img src="pillimages/shadowpakt.png" alt="shadow" className="landscape"/>
            <img src="pillimages/shadowkitreveal.jpeg" alt="shadow" className="landscape"/>
            <p>Distribution:</p>
            <div className="tembed"><TwitterTweetEmbed tweetId={'1384550284718919682'}/></div>
            <p>Notes: The proceeds from the initial Shadowpak sale are in a multisig governed by
                Shadowpakt Factions members to achieve their objectives.</p>
        </div>
    </Accordion>
    <Accordion title="Memfruit">
        <div>
            <p>Boost type: Right Arm Wearable</p>
            <p>Alpha:</p>
            <img src="pillimages/memfruit.png" alt="memfruit" className="tall"/>
            <p>Distribution:</p>
            <div className="tembed"><TwitterTweetEmbed tweetId={'1366140364470501383'}/></div>
            <p>Notes: Memfruit that are "activated" via incantation become portals, 
            the only way through which transactions - or anything - 
            can enter and exit the Mempool</p>
        </div>
    </Accordion>
    <Accordion title="Memwraith">
        <div>
            <p>Boost type: Pet</p>
            <p>Alpha:</p>
            <img src="pillimages/memwraith.png" alt="memwraith" className="portrait"/>
            <img src="pillimages/stani.png" alt="memwraith" className="portrait"/>
            <p>Distribution:</p>
            <div className="tembed"><TwitterTweetEmbed tweetId={'1366141028776960004'}/></div>
            <p>Notes: Pets will have their own progression system where they can
                level up, have customizable attributes, specialize in different
                skills and more. Memwraiths may be breedable in-universe.
            </p>
        </div>
    </Accordion>
    <Accordion title="Memsnake">
        <div>
            <p>Boost type: Head Wearable</p>
            <p>Distribution:</p>
            <div className="tembed"><TwitterTweetEmbed tweetId={'1366142398674403331'}/></div>
        </div>
    </Accordion>
    <Accordion title="Memricorn">
        <div>
            <p>Boost type: Left Arm Wearable</p>
            <p>Distribution:</p>
            <div className="tembed"><TwitterTweetEmbed tweetId={'1366141514909417477'}/></div>
        </div>
    </Accordion>
    <Accordion title="Kirbonite">
        <div>
            <p>Boost type: Torso / Lower Extremity Wearable + Degenerator Faction Membership</p>
            <p>Alpha:</p>
            <img src="pillimages/pepelkirb.png" alt="kirb" className="landscape"/>
            <img src="pillimages/hashkirb.png" alt="kirb" className="landscape"/>
            <p>Distribution:</p>
            <div className="tembed"><TwitterTweetEmbed tweetId={'1374404962495516673'}/></div>
            <p>Notes: Wearables can grant mechanical differences (non-cosmetic) within Pills Universe</p>
        </div>
    </Accordion>
    <Accordion title="Unipill">
        <div>
            <p>Boost type: Unicorn Head (Hashmonk) / Unicorn Mask (Pepel) Wearable</p>
            <p>Alpha:</p>
            <p>Distribution: 10 $UNI for Synth - 400 $UNI for Egodeth</p>
            <div className="tembed"><TwitterTweetEmbed tweetId={'1361068240726818820'}/></div>
        </div>
    </Accordion>
    <Accordion title="Hypepill">
        <div>
            <p>Boost type: Talent Trait</p>
            <p>Egodeth: "The Shill"</p>
            <p>Synth: "The Schemer"</p>
            <p>Distribution:</p>
            <div className="tembed"><TwitterTweetEmbed tweetId={'1356090062484742144'}/></div>
            <p>Notes: Pplpleasr edited and produced motion graphics for the Hypepill promo video </p>
        </div>
    </Accordion>
    <Accordion title="Rektpill">
        <div>
            <p>Boost type:</p>
            <p>Egodeth:</p>
            <p>Synth:</p>
            <p>Alpha:</p>
            <p>Distribution:</p>
            <p>Notes:</p>
        </div>
    </Accordion>
    <Accordion title="RATSpill">
        <div>
            <p>Boost type: yoo</p>
            <p>Egodeth:</p>
            <p>Synth:</p>
            <p>Alpha:</p>
            <p>Distribution:</p>
            <p>Notes:</p>
        </div>
    </Accordion>
    <Accordion title="Payback Pill">
        <div>
            <p>Boost type: test</p>
            <p>Egodeth:</p>
            <p>Synth:</p>
            <p>Alpha:</p>
            <p>Distribution:</p>
            <p>Notes:</p>
        </div>
    </Accordion>
    <Accordion title="Genesis">
        <div>
            <p>Boost type:</p>
            <p>Egodeth:</p>
            <p>Synth:</p>
            <p>Alpha:</p>
            <p>Distribution:</p>
            <p>Notes:</p>
        </div>
    </Accordion>
    <Accordion title="Prodpill">
        <div>
            <p>Boost type:</p>
            <p>Egodeth:</p>
            <p>Synth:</p>
            <p>Alpha:</p>
            <p>Distribution:</p>
            <p>Notes:</p>
        </div>
    </Accordion>
  </StyledGal>
);

export default pillAccordions;

const StyledGal = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

line-height: 1.8;
padding: 2% 5%;
h6 {
  font-size: 3.5rem;
}

.wrapper {
  width: 600px;
  margin: 0 auto;
  
}

.accordion-wrapper {
    margin: 1%;
  & + * {
    margin-top: 0.5em;
  }
  width: 50%;
}

.accordion-item {
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
  height: auto;
  max-height: 99999px;
}

.accordion-item.collapsed {
  max-height: 0;
  transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
}

.accordion-title {
  font-weight: 600;
  cursor: pointer;
  color: #FBFFFB;
  padding: 0.5em 1.5em;
  border: solid 3.5px #f8f9fa;
  border-radius: 1.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid currentColor;
  }

  &:hover,
  &.open {
    color: #f9c74f;
    border: solid 3.5px #f9c74f;
    transition: all 500ms linear;
  }

  &.open {
    &::after {
      content: "";
      border-top: 0;
      border-bottom: 5px solid;
    }
  }
}

.accordion-content {
  padding: 1em 1.5em;
}

img{
    margin: 2%;
}

.tall{
    width: 25%;
}

.landscape{
    width: 70%;
}

.portrait{
    width: 46%
}

.tembed{
    width: 70%;
    margin: 3%;
}
`