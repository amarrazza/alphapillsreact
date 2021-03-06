import React, { useState } from "react";
import styled from "styled-components";

const Accordion = ({ title, children }, props) => {
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

const callAccordions = (props) => (
  <StyledGal className="wrapper">
    <Accordion title="Community Call ~ May 12th, 2022">
      <p>Project updates</p>
      <img
        src="pillimages/comcall-5-12-22-1.png"
        alt="call"
        className="callImage"
      />
      <img
        src="pillimages/comcall-5-12-22-2.png"
        alt="call"
        className="callImage"
      />
      <br />
      <a
        href="https://pills.notion.site/May-12-2022-57ac60d08cfe4a019b3de89672de15dd"
        rel="noreferrer"
        target="_blank"
      >
        * Full Call Recording and Notes *
      </a>
    </Accordion>
    <Accordion title="Community Call ~ May 5th, 2022">
      <p>Project updates</p>
      <img
        src="pillimages/comcall-5-5-22-1.png"
        alt="call"
        className="callImage"
      />
      <img
        src="pillimages/comcall-5-5-22-2.png"
        alt="call"
        className="callImage"
      />
      <br />
      <a
        href="https://pills.notion.site/May-5-2022-9d7f98f6daf64a19aebcaabc3c277204"
        rel="noreferrer"
        target="_blank"
      >
        * Full Call Recording and Notes *
      </a>
    </Accordion>
    <Accordion title="Community Call ~ Apr 14th, 2022">
      <p>Project updates</p>
      <img
        src="pillimages/call-4-14-22.png"
        alt="call"
        className="callImage"
      />
      <img
        src="pillimages/call-4-14-22-2.png"
        alt="call"
        className="callImage"
      />
      <br />
      <a
        href="https://pills.notion.site/April-14-2022-1c922e4784e64428a05bba869b71b4a3"
        rel="noreferrer"
        target="_blank"
      >
        * Full Call Recording and Notes *
      </a>
    </Accordion>
    <Accordion title="Community Call ~ Mar 31st, 2022">
      <p>Project updates and Collaboration Brainsesh</p>
      <img
        src="pillimages/call-3-31-2022.png"
        alt="call"
        className="callImage"
      />
      <img
        src="pillimages/call-3-31-2022-2.png"
        alt="call"
        className="callImage"
      />
      <br />
      <a
        href="https://pills.notion.site/March-31-2022-e5c7e3c50e7c45baa9146c25938d55dc"
        rel="noreferrer"
        target="_blank"
      >
        * Full Call Recording and Notes *
      </a>
    </Accordion>
    <Accordion title="Community Call ~ Mar 24th, 2022">
      <p>Went through project updates</p>
      <img
        src="pillimages/cc324221.png"
        alt="call"
        className="callImage"
      />
      <img
        src="pillimages/cc324222.png"
        alt="call"
        className="callImage"
      />
      <ul>
        <li>Blit pill leaked</li>
        <img
        src="pillimages/blitpill.png"
        alt="blit"
        className="landscape"
        />
        <li>3D hashmonk leaked</li>
        <img
        src="pillimages/3dhashnullface.png"
        alt="3dhash"
        className="portrait"
        />
        <li>Walked through avatar creator for hashmonks</li>
      </ul>
    </Accordion>
    <Accordion title="Community Call ~ Mar 17th, 2022">
      <p>Project updates</p>
      <img
        src="pillimages/cc31722.png"
        alt="call"
        className="callImage"
      />
      <img
        src="pillimages/cc317222.png"
        alt="call"
        className="callImage"
      />
      <br />
      <a
        href="https://www.notion.so/pills/Community-Call-4d5fe17f53a443c69516dac19c87db1a"
        rel="noreferrer"
        target="_blank"
      >
        * Full Call Recording and Notes *
      </a>
    </Accordion>
    <Accordion title="Community Call ~ Mar 3rd, 2022">
      <div className="calldetails">
        <div className="calltext">
          <h2>Avatar Backstory Generator</h2>
          <ul>
            <li>
              When creating your avatar, based on what traits you choose, there
              will be a suitable backstory auto-generated
            </li>
          </ul>
          <h2>
            Avatar Origin Locations discussed{" "}
            <a
              href="https://discord.com/channels/805920770114977872/806112228800987167/949005308380975194"
              rel="noreferrer"
              target="_blank"
              className="secret"
            >
              (images in discord only)
            </a>
          </h2>
          <ul>
            <li>Krolos</li>
            <ul>
              <li>As if Flashbots evlved and came up with a planet</li>
            </ul>
            <li>Pepolis</li>
            <ul>
              <li>Capital city</li>
            </ul>
          </ul>
          <h2>Avatar Creation Engine Preview</h2>
          <img
            src="pillimages/pacepreview.png"
            alt="call"
            className="landscape"
          />
          <h2>Totem Quest</h2>
          <ul>
            <li>Anti-bot puzzle to earn Blessing Pool tickets</li>
            <li>Can keep exploring to earn more entries</li>
          </ul>
          <h2>Faction recruiters (images in discord only)</h2>
          <ul>
            <li>
              Figures meant to convince players to join their respective
              factions
            </li>
          </ul>
          <h2>First Pillshot leaked</h2>
          <h2>Crypto-native projects will get airdropped a special pill</h2>
          <ul>
            <li>Tubby Cats</li>
            <li>Wassies</li>
            <li>0xmons</li>
            <li>Blitmaps and Blitnauts</li>
            <li>Cryptoadz</li>
            <li>Could be more to come</li>
          </ul>
        </div>
      </div>
    </Accordion>
    <Accordion title="Community Call ~ Feb 17th, 2022">
      <p>Brainstorm session on materials in-universe</p>
      <img
        src="pillimages/call-2-17-2022.png"
        alt="call"
        className="callImage"
      />
      <br />
      <a
        href="https://pills.notion.site/February-17-2022-f7fcd430ead8432fb9a1f6ace5428017"
        rel="noreferrer"
        target="_blank"
      >
        * Full Call Recording and Notes *
      </a>
    </Accordion>
    <Accordion title="Community Call ~ Feb 10th, 2022">
      <p>Project updates + brainstorm sesh</p>
      <img
        src="pillimages/call2-10-22-1.png"
        alt="call"
        className="callImage"
      />
      <img
        src="pillimages/call2-10-22-2.png"
        alt="call"
        className="callImage"
      />
      <br />
      <a
        href="https://pills.notion.site/February-10-2022-0e9e62dcf7244412a693d9d70998d22d"
        rel="noreferrer"
        target="_blank"
      >
        * Full Call Recording and Notes *
      </a>
    </Accordion>
    <Accordion title="Community Call ~ Feb 3rd, 2022">
      <div className="calldetails">
        <div className="calltext">
          <h2>Avatar Creation</h2>
          <ul>
            <li>UI design has been a challenge but being worked through</li>
            <li>@Mirshko hardcore front-end developer, killing it</li>
          </ul>
          <h2>D.E.R.P.S</h2>
          <ul>
            <li>Custom Roleplaying System developed by the team</li>
            <li>A ruleset that any game can use and build on top of</li>
            <li>
              Can be implemented for avatar stats, success/failure rates, etc
            </li>
            <li>
              Can be applied to a card game (being explored), tabletop RPGs, etc
            </li>
          </ul>
          <h2>Distribution of Portalpills</h2>
          <ul>
            <li>Collaboration with TempleDAO</li>
            <li>Will be a browser-based experience</li>
            <ul>
              <li>Illustrium working on art</li>
            </ul>
            <li>Designed to be a fair launch</li>
            <li>
              Sequence of steps and puzzles to make yourself eligible for the
              raffle
            </li>
            <ul>
              <li>To mitigate against bots</li>
            </ul>
          </ul>
          <h2>Faction wearables</h2>
          <ul>
            <li>
              Wearables received as you gain rank and/or reputation in your
              faction
            </li>
          </ul>
          <h2>Pillshots</h2>
          <ul>
            <li>30 second insight into a part of the lore</li>
            <ul>
              <li>Can be a creature, location, event, etc</li>
            </ul>
          </ul>
          <h5>Collaborative trait naming for rest of call</h5>
          <a
            href="https://pills.notion.site/February-3rd-2022-bf3b7eb4108b4bac8792a587b74935ae"
            rel="noreferrer"
            target="_blank"
          >
            * Call Recording and More Notes *
          </a>
        </div>
      </div>
    </Accordion>
    <Accordion title="Community Call ~ Jan 27th, 2022">
      <p>Project updates + brainstorm sesh</p>
      <img
        src="pillimages/call-1-27-22-1.png"
        alt="call"
        className="callImage"
      />
      <img
        src="pillimages/call-1-27-22-2.png"
        alt="call"
        className="callImage"
      />
      <br />
      <a
        href="https://pills.notion.site/February-10-2022-0e9e62dcf7244412a693d9d70998d22d"
        rel="noreferrer"
        target="_blank"
      >
        * Full Call Recording and Notes *
      </a>
    </Accordion>
    <Accordion title="Community Call ~ Jan 20th, 2022">
      <div className="calldetails">
        <div className="calltext">
          <h2>Faction Banner Art by Illustrium</h2>
          <ul>
            <li>New faction leak images in discord only!!</li>
            <li>Alchemix </li>
            <ul>
              <li>Clones for loans</li>
              <li>
                Illustrium more experience with creatures/characters,
                environments take different skills, was fun to get into it{" "}
              </li>
              <li>
                All the faction banners are super high resolution, print quality
              </li>
              <img
                src="./pillimages/alch5.png"
                alt="alch"
                className="comicbig"
              />
            </ul>
            <li>Yearn</li>
            <ul>
              <li>Focus is on four heroic female characters, the YFu</li>
              <img src="./pillimages/yfi7.png" alt="alch" className="comicp" />
            </ul>
            <li>Olympus</li>
            <ul>
              <li>
                Rite of passage to join their cult is to climb Mount Olympus
              </li>
              <img src="./pillimages/ohm5.png" alt="alch" className="comicp" />
            </ul>
            <li>Uniswap</li>
            <ul>
              <li>
                Unigod was especially challenging to draw because of its level
                of detail
              </li>
              <li>
                A cult that is open to all and anyone can create any structure
                to attune itself to the unigod, and channel it's essence
              </li>
              <img src="./pillimages/uni10.png" alt="alch" className="comicp" />
            </ul>
            <li>BadgerDAO</li>
            <ul>
              <li>
                Piece by piece they are transporting the bitcoin god chain
                across chainspace, looking to bind it to another chain to revive
                or fortify it
              </li>
              <img
                src="./pillimages/badger1.png"
                alt="alch"
                className="comicp"
              />
            </ul>
            <li>Aave</li>
            <ul>
              <li>
                Location based inside the belly of an ancient massive Memwraith
                that consumed a Memfruit
              </li>
            </ul>
          </ul>
          <h2>Other topics</h2>
          <ul>
            <li>?</li>
            <img
              src="./pillimages/darkbanteg.png"
              alt="alch"
              style={{ width: "30%" }}
            />
            <li>3D waterform hashmonks leak</li>
            <li>Brought on another dev to the team</li>
            <li>
              Going to start focusing more on marketing and public awareness
            </li>
            <li>Rinkeby testnet for avatar launch coming soon</li>
            <li>Faction banners as posters</li>
            <ul>
              <li>Possibility for nft with physical redemption</li>
              <li>If sold, artist should be compensated</li>
              <li>Pills can act as a platform to support many creators</li>
            </ul>
          </ul>
          <a
            href="https://pills.notion.site/January-20th-2022-583ff7777e5d4ad9adac8c91544304c9"
            rel="noreferrer"
            target="_blank"
          >
            * Call Recording and More Notes *
          </a>
        </div>
      </div>
    </Accordion>
    <Accordion title="Community Call ~ Jan 12th, 2022">
      <div className="calldetails">
        <div className="calltext">
          <h2>Notion</h2>
          <ul>
            <li>Reorganization of ongoing projects for contributors</li>
            <li>
              Leverage notion to create clear on-ramps for the community to
              contribute and create{" "}
            </li>
            <li>Effort is led by Imalgen</li>
          </ul>
          <h2>Community Survey findings</h2>
          <ul>
            <li>116 total responses</li>
            <li>Went over demographics, gaming experience, etc</li>
            <li>
              Useful for identifying perceptions of what this project is,
              expectations down the road, and what the team is currently lacking
            </li>
            <img
              src="./pillimages/surveypanel.png"
              alt="survey"
              className="comicp"
            />
          </ul>
          <h2>Drop Table weights</h2>
          <ul>
            <li>
              In-depth discussion about the behavior of character options{" "}
            </li>
            <li>
              Balancing and distributing wearables, skeleton components is a
              challenge since the minter's choices influence the final outcome
            </li>
            <li>Rarity tiers for wearables will exist outside of pillboosts</li>
            <li>
              Wearables will be able to be 'unlocked' and turned into separate
              NFTs (either 1155s or 721s)
            </li>
          </ul>
          <h2>Scaling solution for avatar creation </h2>
          <ul>
            <li>
              Narrowed down to a true Ethereum L2 (still subject to change)
            </li>
            <li>
              Potential complication with Arbitrum's VRF (verifiable Random
              Function) that is being investigated
            </li>
          </ul>
        </div>
      </div>
    </Accordion>
    <Accordion title="Community Call ~ Dec 15th, 2021">
      <div className="calldetails">
        <div className="calltext">
          <h2>Gnosis Multisig for managing guild and community grants</h2>
          <ul>
            <li>Signers are a mix of guild members and capsules</li>
            <li>
              For dispersement of funds to guilds and community led initiatives{" "}
            </li>
            <li>A beginning for the guilds' independence from the team</li>
          </ul>
          <h2>Comic w/ Yearn</h2>
          <ul>
            <li>Hoping to have first issue completed in January</li>
            <li>Some image leaks (concept or uncolored):</li>
            <img
              src="./pillimages/comica2.jpeg"
              alt="comic"
              className="comicbig"
            />
            <img
              src="./pillimages/comica1.jpeg"
              alt="comic"
              className="comicbig"
            />
            <img
              src="./pillimages/comica3.jpeg"
              alt="comic"
              className="comicbig"
            />
          </ul>
          <h2>Art progress</h2>
          <ul>
            <li>Vitalik the Vyper-God 3D model close to completion</li>
            <li>Banteg, Unigod, and Maki models underway</li>
            <video controls width="450">
              <source src="./pillimages/3dunigod.mp4" type="video/mp4" />
            </video>
            <li>Pepel models are done</li>
            <li>Hashmonk models will take longer due to their complexity</li>
          </ul>
          <h2>Testnet for Avatar Creation</h2>
          <ul>
            <li>Contracts are up on rinkeby</li>
            <li>Frontend close to being connected</li>
            <li>
              Limited rinkeby testnet release is happening SOON (hopes are for
              over the holidays)
            </li>
          </ul>
          <h2>Lorecrafters</h2>
          <ul>
            <li>Lorecrafter Introduction Guide completed</li>
            <li>
              <a href="./pillimages/LorecraftIntrodoc.pdf" target="_blank">
                Read here
              </a>
            </li>
          </ul>
          <h2>Notion</h2>
          <ul>
            <li>A notion instance has been created by a community member</li>
            <li>
              Will act as a hub not just for capsules but for guilds and
              surrounding community
            </li>
            <ul>
              <li>
                Will eventually post bounties for community led initiatives
              </li>
            </ul>
            <li>More updates on this in the coming weeks</li>
          </ul>
          <h2>PILLS Onboarding Quest</h2>
          <ul>
            <li>
              Creating a version of Temple DAO's opening ceremony (in
              collaboration with them)
            </li>
            <li>
              Allows for a fair launch without bots and to reward people who are
              committed to the project
            </li>
            <li>Will be more social-oriented and less puzzle-oriented</li>
            <li>Will be able to pledge to a faction (e.g Yearn, Sushi, etc)</li>
            <li>
              Factions will compete for the top of the leaderboard to get
              additional portalpill raffle entries
            </li>
          </ul>
          <h2>Beatcrafters</h2>
          <ul>
            <li>Holiday mix coming together</li>
            <li>
              Yearn is commissioning the BCs to create music for their lore
            </li>
            <li>An introduction guide to the BCs is in the works</li>
          </ul>
          <h6>
            Recording link:{" "}
            <a
              href="https://www.dropbox.com/s/tqamlzmqpzsumxx/Pills%20Community%20Call%2012-15.mp3?dl=0"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Community Call 12-15-2021
            </a>
          </h6>
        </div>
      </div>
    </Accordion>
    <Accordion title="Community Call ~ Dec 8th, 2021">
      <div className="calldetails">
        <div className="calltext">
          <h2>Pills Research</h2>
          <ul>
            <li>User research</li>
            <ul>
              <li>
                In the next week or two the community will be asked to fill out
                a survey
              </li>
              <li>
                Info will be used to get a better sense of direction of what to
                build towards
              </li>
            </ul>
            <li>Market research</li>
            <ul>
              <li>
                Surveying what other blockchain gaming projects are doing for
                economic and scaling models
              </li>
              <li>As well as community sentiment and token incentives</li>
            </ul>
          </ul>
          <h2>Art progress</h2>
          <ul>
            <li>OIEA working on coloring and texturing for hashmonk forms </li>
            <li>Wrapping up 3D pepel model texturing</li>
          </ul>
          <h2>D.E.R.P.S</h2>
          <ul>
            <li>Pet system continually being worked on</li>
            <li>
              Will be like a mini-game within pills universe in a future update
            </li>
          </ul>
          <h2>Testnet for avatar launch</h2>
          <ul>
            <li>Coming soon</li>
            <li>For community members who have volunteered to playtest</li>
            <li>Smart contracts will be made public</li>
          </ul>
          <h2>Lorecrafters</h2>
          <ul>
            <li>New Twitter account for Pills Lore &#128038;</li>
            <ul>
              <li>
                <a
                  href="https://twitter.com/PillsLore?ref_src=twsrc%5Etfw"
                  className="twitter-follow-button"
                  data-show-count="false"
                >
                  Follow @PillsLore
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </li>
            </ul>
            <li>Lore accessibility</li>
            <ul>
              <li>
                Lore introduction guide will be complete in the next few days
              </li>
            </ul>
            <li>Digestible short stories being worked on</li>
          </ul>
          <h2>Beatcrafters</h2>
          <ul>
            <li>Working on a new collaborative mix coming out this month</li>
            <li>In-universe Rave &#9774;&#65039;</li>
            <ul>
              <li>More lorejam practice sessions with lorecrafters</li>
            </ul>
            <li>
              Paleo discussed how he creates pillscapes and showed his setup
            </li>
            <img
              src="pillimages/pillscapeset.png"
              alt="pillscapeset"
              className="comicp"
            />
          </ul>
          <h6>
            Recording link:{" "}
            <a href="https://www.dropbox.com/s/x0lvezjndy8qpxu/Pills%20Community%20Call%2012-04.mp3?dl=0">
              {" "}
              Community Call 12-08-2021
            </a>
          </h6>
        </div>
      </div>
    </Accordion>
    <Accordion title="Community Call ~ Dec 1st, 2021">
      <div className="calldetails">
        <div className="calltext">
          <h2>Art Progress</h2>
          <ul>
            <li>3d Pepels close to completion</li>
            <ul>
              <li>Walk, run, and keep alive animations in development</li>
              <li>
                Hashmonks are more nuanced since there are many different body
                types, but are coming along
              </li>
            </ul>
          </ul>
          <h2>D.E.R.P.S (Degen-Extendable Roleplaying System)</h2>
          <ul>
            <li>Core attribute and skill mechanics are finished</li>
            <li>
              Now have the capacity to use this as a foundation to build on
            </li>
            <ul>
              <li>
                Not just for PILLS, any role-playing game can use D.E.R.P.S to
                make their avatars/assets interop
              </li>
            </ul>
          </ul>
          <h2>Portalpill distribution</h2>
          <ul>
            <li>
              The team is exploring ways to avoid bots for the summoning circle
              raffle
            </li>
            <li>
              Discussions around an experience for the community to partake in
              to get whitelisted for the raffle
            </li>
            <li>Would include puzzles and in-universe faction competitions</li>
            <li>Exploring the technical and creative scope of this</li>
          </ul>
          <h2>Lorecrafters</h2>
          <ul>
            <li>New Twitter account for Pills Lore &#128038;</li>
            <ul>
              <li>
                <a
                  href="https://twitter.com/PillsLore?ref_src=twsrc%5Etfw"
                  className="twitter-follow-button"
                  data-show-count="false"
                >
                  Follow @PillsLore
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </li>
              <li>Details coming at a later date</li>
            </ul>
            <li>Lore accessibility</li>
            <ul>
              <li>Creating lore introduction guides</li>
              <li>Working on more digestible forms of content</li>
            </ul>
          </ul>
          <h2>Beatcrafters</h2>
          <ul>
            <li>In-universe Rave &#9774;&#65039;</li>
            <ul>
              <li>Have had a few lorejam practice sessions</li>
              <li>High production value bits will be pre-recorded</li>
              <ul>
                <li>Lorejam is improvised lore creation</li>
              </ul>
            </ul>
          </ul>
          <h2>Memecrafters</h2>
          <ul>
            <li>New stickers added to server &#128526;</li>
          </ul>
        </div>
      </div>
    </Accordion>
    <Accordion title="Community Call ~ Nov 17th, 2021">
      <div className="calldetails">
        <div className="calltext">
          <h2>Art Progress</h2>
          <ul>
            <li>Pillboost artwork close to completed</li>
            <li>3d models coming along</li>
            <ul>
              <li>Pepels 90% done, hashmonks not far behind</li>
              <li>
                Looping animations such as walking and running in progress
              </li>
            </ul>
            <li>Egodeth Pepel leaked &#128293;</li>
            <img
              src="https://media.discordapp.net/attachments/806112228800987167/910622297742803005/unknown.png"
              alt="green ego pepel"
              className="comicbig"
            />
            <img
              src="https://media.discordapp.net/attachments/806112228800987167/910622476269125652/unknown.png"
              alt="turq ego pepel"
              className="comicbig"
            />
            <img
              src="https://media.discordapp.net/attachments/806112228800987167/910622554392256512/unknown.png"
              alt="swamp ego pepel"
              className="comicbig"
            />
            <li>
              ArcLamp brought on for more creative exploration and direction
            </li>
            <ul>
              <li>Holo Armor for Hashmonks concept leaked</li>
              <img
                src="https://media.discordapp.net/attachments/806112228800987167/910622950221287484/holoarmor.png"
                alt="holo armor"
                className="comicbig"
              />
              <li>Holo Mandala for Hashmonk faction allegiance leaked</li>
              <img
                src="https://media.discordapp.net/attachments/806112228800987167/910623343441477712/Screen_Shot_2021-11-17_at_5.10.37_PM.png"
                alt="Holo Mandala"
                className="comicbig"
              />
            </ul>
          </ul>
          <h2>Comic w/ Yearn</h2>
          <ul>
            <li>Comic series going really well</li>
            <li>First chapter will be completed next month</li>
            <li>Andre concept art leaked</li>
            <img
              src="https://media.discordapp.net/attachments/806112228800987167/910624092451921930/photo_2021-11-17_15.53.55.jpeg"
              alt="andre body"
              className="comicbig"
            />
            <img
              src="https://media.discordapp.net/attachments/806112228800987167/910624173158723634/photo_2021-11-17_15.53.49.jpeg"
              alt="andre face"
              className="comicbig"
            />
            <li>First page of comic leaked &#128561;</li>
            <img
              src="https://media.discordapp.net/attachments/806112228800987167/910624243555909712/photo_2021-11-17_15.53.21.jpeg"
              alt="comic p1"
              className="comicbig"
            />
            <li>
              Discussion around how to incorporate the comics into the
              interactive side of Pills Universe
            </li>
          </ul>
          <h2>Hiring</h2>
          <ul>
            <li>
              The team is actively looking for people with game design and
              development experience
            </li>
            <li>If you know someone, feel free to intro them</li>
          </ul>
          <h2>Lorecrafters</h2>
          <ul>
            <li>New Lore collab channel</li>
            <ul>
              <li>
                Colloboration projects open to anyone, not just lorecrafters
              </li>
              <li>Current project is creating new planets in Chainspace</li>
            </ul>
            <li>Latest Lorecrafter call</li>
            <ul>
              <li>
                Discussed how pills can be used within the universe, visually
                and narratively{" "}
              </li>
            </ul>
          </ul>
          <h2>Beatcrafters</h2>
          <ul>
            <li>In-universe Rave on Pills.FM officially announced &#128563;</li>
            <ul>
              <li>3 hour live stream event</li>
              <li>High production value bits will be pre-recorded</li>
              <img
                src="https://media.discordapp.net/attachments/806112228800987167/910630162100535357/Screenshot_2021-11-17_at_22.26.54.png"
                alt="mempool"
                className="comicbig"
              />
              <img
                src="https://media.discordapp.net/attachments/806112228800987167/910630163010682950/Screenshot_2021-11-17_at_22.36.03.png"
                alt="pillartsimo"
                className="comicbig"
              />
            </ul>
          </ul>
        </div>
      </div>
    </Accordion>
    <Accordion title="Community Call ~ Nov 10th, 2021">
      <div className="calldetails">
        <div className="calltext">
          <h2>Portal Pill Distribution</h2>
          <ul>
            <li>Over 25% of Portalpills have been claimed</li>
            <li>1/8th of all unique wallets have claimed</li>
          </ul>
          <h2>Chad auction and Raffle</h2>
          <ul>
            <li>Now being pushed back until after avatar launch</li>
            <li>Allows PZ-01 to be focused on and launched faster</li>
            <li>Team is in a safe position regarding funding</li>
          </ul>
          <h2>Wearables</h2>
          <ul>
            <li>Crafting</li>
            <ul>
              <li>A type of skill</li>
              <li>
                Crafters can create wearables, with rarity depnding on the skill
                of the crafter
              </li>
            </ul>
            <li>Rarity</li>
            <ul>
              <li>Five rarities (synth is most common) </li>
              <img
                src="https://media.discordapp.net/attachments/806112228800987167/908073377527369778/unknown.png"
                alt="rare"
              />
            </ul>
            <li>Wearable Trees</li>
            <ul>
              <li>
                Wearables can be invested in through three different advancement
                trees
              </li>
              <ul>
                <li>Attack</li>
                <li>Defense</li>
                <li>Utility</li>
              </ul>
              <li>
                Depending on which you advance, can open up new narrative paths
                and gameplay
              </li>
            </ul>
            <li>Beatcrafters</li>
            <ul>
              <li>Currently 11 musicians</li>
              <li>
                Simo will start giving regular updates in the music channel
              </li>
              <li>
                The Beatcrafters are now taking commisions if anyone would like
                music made for them
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </Accordion>
  </StyledGal>
);

export default callAccordions;

const StyledGal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  line-height: 1.8;
  padding: 5%;

  h2 {
    font-size: 3.5rem;
  }

  h6 {
    font-size: 2.2rem;
  }
  h5 {
    font-size: 2.4rem;
    margin: 1%;
  }

  .accordion-wrapper {
    & + * {
      margin-top: 0.5em;
    }
    width: 85%;
  }

  .accordion-item {
    overflow: hidden;
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
    height: auto;
    max-height: 99999px;
    margin-bottom: 2%;
  }

  .accordion-item.collapsed {
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
  }

  .accordion-title {
    font-weight: 600;
    cursor: pointer;
    color: #fbfffb;
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

  .callImage {
    width: 70%;
  }

  .comicp {
    width: 75%;
  }

  .comicbig {
    width: 30%;
  }

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:active {
    color: blue;
  }

  .secret {
    color: #fbfffb;
    text-decoration: none;
  }

    @media (max-width: 550px){
    margin-bottom: 10%;
    .accordion-wrapper{
      margin-top: 5%;
    }
    .accordion-title {
      font-size: 1.4rem;
    }
    p, a, li{
      font-size: 1.2rem;
    }
    li{
      margin-top: 1%;
    }
    .accordion-content {
      padding: 1em 1.1em;
    }
    h2 {
    font-size: 2rem;
    margin-top: 3%;
    margin-bottom: 4%;
  }
  .callImage {
    width: 100%;
    margin-top: 3%;
  }

  .comicp {
    width: 95%;
  }

  .comicbig {
    width: 95%;
  }

  }
`
