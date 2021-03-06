import React, { useState } from "react";
import styled from "styled-components";

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
const faqAccordions = () => (
  <StyledGal className="wrapper">
    <Accordion title="What is Pills Universe?">
        <p>Pills Universe can be broken down into 4 main segments that work together to form
          a larger whole:
        </p>
        <br />
        <ol>
          <li>An epic, extendable on-chain MMORPG with crypto-native lore that takes place inside a community-created setting called Chainspace</li>
          <li>The avatar creation engine, where you can generate a Pepel or Hashmonk to receive a 2D rendering,
            and soon after a fully-rigged interoperable 3D model</li>
          <li>In-house IP creation through the production of comics and animated shorts</li>
          <li>D.E.R.P.S (Degen-Extendable Role-playing System), a custom ruleset built by the team that underlies
            the avatar stats, progression, success/failure of in-game actions, + more. Other projects are welcome
            to adopt D.E.R.P.S to become interoperable with Pills Universe</li>
        </ol>
    </Accordion>
    <Accordion title="What can I do in Pills Universe?">
      <p>You can mint an avatar, level it up, customize it, 
          join a faction and soon - go questing, crafting, experience combat and more.</p>
    </Accordion>
    <Accordion title="How can I get an avatar?">
      <p>Portalpills are your key to minting an avatar. There are three ways to acquire a portalpill:
      </p>
          <ol>
            <li>Purchase one off <a href="https://opensea.io/collection/pills" target="_blank" rel="noreferrer">OpenSea</a>. 
            This is the only way to guarantee you can mint an avatar</li>
            <li>Participate in the upcoming raffle. This will be at an accessible price</li>
            <li>Place a bid in the upcoming dynamic dutch auction. This will be for a rare
                type of portalpill with unique visual attributes
            </li>
          </ol>
    </Accordion>
    <Accordion title="What are Pills?">
      <p>Pills (not to be confused with portalpills) allow you to boost your avatar 
          with rare wearables, traits, or pets. Some pills
          give access to in-universe factions such as the Shadowpakt or RATStribe. 
          <br /> <br />Pills are split into two rarities: Egodeth and Synth. Egodeth have
          unique visual traits and for most pill types, there exists only 10. They can be 
          denoted on marketplaces by possessing the Generation 1 attribute. <br /><br />
          Pills can only be acquired via purchasing on 
          <a href="https://opensea.io/collection/pills"> OpenSea. </a>See
          below for the full list:</p>
        <img src="pillimages/pillboostdeets.png" alt="pillboosts" /> 
    </Accordion>
    <Accordion title="What are guilds?">
      <p>Guilds are places for creatives from the community to come together to help 
          create the stories, sounds, and visuals of the universe. The two main guilds 
          are the Lorecrafters, for those who enjoy writing, and the Beatcrafters, 
          for those that make music. There are also Artcrafters, Codecrafters, and 
          Hypecrafters. If you have any interest in joining, reach out in 
          the Pills Universe discord.
      </p>
    </Accordion>
    <Accordion title="What are factions?">
      <p>Factions are in-universe coordination groups that players can join
          if they are eligible. Within your faction you will be able to rise
          through the ranks, earn reputation, and unlock specific faction wearables.
          Some of the main factions include ones native to Pills Universe such as
          the Shadowpakt or RATStribe, and others that are spun-off from DeFi protocols
          like Yearn, Sushi, Alchemix, Uniswap, Olympus, Badger, and Aave.
      </p>
    </Accordion>
    <Accordion title="Wen launch?">
      <p>Soon. The team is aiming for Q1 2022.
      </p>
    </Accordion>
  </StyledGal>
);

export default faqAccordions;

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
  width: 100%;
}

img{
    margin-top: 2%;
}

li{
      margin-top: 1%;
    }

@media (max-width: 1000px){
  .accordion-wrapper{
      width: 80%;
      margin-top: 4%;
    }
}

@media (max-width: 550px){
    margin-bottom: 10%;
    .accordion-wrapper{
      width: 85%;
      margin-top: 5%;
    }
    .accordion-title {
      font-size: 1.4rem;
    }
    p, a, li{
      font-size: 1.2rem;
    }
    li{
      margin-top: 3%;
    }
    .accordion-content {
      padding: 1em 1.1em;
}
    }
`