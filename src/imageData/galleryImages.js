
let id = 0

const galleryImages = [
    {
        id: id++,
        src: "../pillimages/xmon3.jpeg",
        alt: "xmon",
        text: "",
        tags: "xmon pill"
    },
    {
        id: id++,
        src: "../pillimages/xmon2.jpeg",
        alt: "xmon",
        text: "",
        tags: "xmon pill"
    },
    {
        id: id++,
        src: "../pillimages/sushirecruiter.jpeg",
        alt: "sushi recruiter",
        text: "Sushi Faction recruiter",
        tags: "Sushi Faction recruiter"
    },
    {
        id: id++,
        src: "../pillimages/xmon1.jpeg",
        alt: "xmon",
        text: "",
        tags: "xmon pill"
    },
    {
        id: id++,
        src: "../pillimages/xmonpill.jpeg",
        alt: "xmon",
        text: "",
        tags: "xmon pill"
    },
    {
        id: id++,
        src: "../pillimages/frogarc.jpeg",
        alt: "frog concepts",
        text: "",
        tags: "arclamp concepts pepels"
    },
    {
        id: id++,
        src: "../pillimages/hashofmem.jpeg",
        alt: "hashmonks",
        text: "",
        tags: "starsend hashmonks concepts"
    },
    {
        id: id++,
        src: "../pillimages/blockwormc.png",
        alt: "blockworm",
        text: "Azshtttrokk, The Host - An ancient Blockworm",
        tags: "Azshtttrokk, The Host - An ancient Blockworm"
    },
    {
        id: id++,
        src: "../pillimages/yfirecruiter.jpeg",
        alt: "yfi",
        text: "Yearn Faction recruiter",
        tags: "Yearn Faction recruiter"
    },
    {
        id: id++,
        src: "../pillimages/aaverecruiter.jpeg",
        alt: "aave",
        text: "Aave Faction recruiter",
        tags: "Aave Faction recruiter"
    },
    {
        id: id++,
        src: "../pillimages/factioncards.jpeg",
        alt: "pace factions",
        text: "",
        tags: "pace factions"
    },
    {
        id: id++,
        src: "../pillimages/azsh.png",
        alt: "blockworm",
        text: "",
        tags: "blockworm"
    },
    {
        id: id++,
        src: "../pillimages/alcxrecruiter.jpeg",
        alt: "alcx",
        text: "Alchemix Faction recruiter",
        tags: "Alchemix Faction recruiter"
    },
    {
        id: id++,
        src: "../pillimages/unirecruiter.jpeg",
        alt: "uni",
        text: "Uniswap Faction recruiter",
        tags: "Uniswap Faction recruiter"
    },
    {
        id: id++,
        src: "../pillimages/seer.jpeg",
        alt: "seer",
        text: "",
        tags: "aave concepts seer"
    },
    {
        id: id++,
        src: "../pillimages/seeker.jpeg",
        alt: "seeker",
        text: "",
        tags: "aave concepts seeker"
    },
    {
        id: id++,
        src: "../pillimages/guide.jpeg",
        alt: "guide",
        text: "",
        tags: "aave concepts guide"
    },
    {
        id: id++,
        src: "../pillimages/guard.jpeg",
        alt: "guard",
        text: "",
        tags: "aave concepts guard"
    },
    {
        id: id++,
        src: "../pillimages/teamfinal.jpeg",
        alt: "capsules",
        text: "Team portrait",
        tags: "team portrait arclamp"
    },
    {
        id: id++,
        src: "../pillimages/engine1.jpeg",
        alt: "avatar",
        text: "",
        tags: "pace avatar"
    },
    {
        id: id++,
        src: "../pillimages/ohm12.jpeg",
        alt: "ohm",
        text: "",
        tags: "Olympus Faction banner ohm"
    },
    {
        id: id++,
        src: "../pillimages/sabo.jpeg",
        alt: "badger",
        text: "",
        tags: "badger concepts saboteur"
    },
    {
        id: id++,
        src: "../pillimages/smuggler.jpeg",
        alt: "badger",
        text: "",
        tags: "badger concepts smuggler"
    },
    {
        id: id++,
        src: "../pillimages/brute.jpeg",
        alt: "badger",
        text: "",
        tags: "badger concepts brute"
    },
    {
        id: id++,
        src: "../pillimages/uni11.jpeg",
        alt: "uni",
        text: "",
        tags: "uniswap concepts"
    },
    {
        id: id++,
        src: "../pillimages/ohm11.jpeg",
        alt: "ohm",
        text: "",
        tags: "ohm olympus concepts"
    },
    {
        id: id++,
        src: "../pillimages/helmpep.jpeg",
        alt: "pepel",
        text: "",
        tags: "2d pepel"
    },
    {
        id: id++,
        src: "../pillimages/3dhelmpep.jpeg",
        alt: "3dpepel",
        text: "",
        tags: "3d pepel"
    },
    {
        id: id++,
        src: "../pillimages/andrelight.jpeg",
        alt: "andre",
        text: "",
        tags: "andre"
    },
    {
        id: id++,
        src: "../pillimages/loclouds.jpeg",
        alt: "origin",
        text: "Loclouds, one of the Origin Traits",
        tags: "Loclouds Origin Traits cards"
    },
    {
        id: id++,
        src: "../pillimages/aaetos.png",
        alt: "aaetos",
        text: "",
        tags: "aaetos concepts"
    },
    {
        id: id++,
        src: "../pillimages/frag.jpeg",
        alt: "fragment",
        text: "",
        tags: ""
    },
    {
        id: id++,
        src: "../pillimages/comicleak.jpeg",
        alt: "comic",
        text: "",
        tags: "comic andre"
    },
    {
        id: id++,
        src: "../pillimages/vitalik3d.jpeg",
        alt: "vitalik3d",
        text: "",
        tags: "3d vitalik vyper god"
    },
    {
        id: id++,
        src: "../pillimages/aave4.png",
        alt: "aave",
        text: "",
        tags: "ghostlands aave faction banner"
    },
    {
        id: id++,
        src: "../pillimages/aave3.png",
        alt: "aave",
        text: "",
        tags: "aave concepts"
    },
    {
        id: id++,
        src: "../pillimages/aave2.png",
        alt: "aave",
        text: "",
        tags: "aave concepts"
    },
    {
        id: id++,
        src: "../pillimages/aave1.png",
        alt: "aave",
        text: "",
        tags: "aave concepts"
    },
    {
        id: id++,
        src: "../pillimages/yfi1.jpeg",
        alt: "yfi",
        text: "",
        tags: "yfi faction banner"
    },
    {
        id: id++,
        src: "../pillimages/yfi6.png",
        alt: "yfi",
        text: "",
        tags: "yfi concepts"
    },
    {
        id: id++,
        src: "../pillimages/yfi7.png",
        alt: "yfi",
        text: "",
        tags: "yfi concepts"
    },
    {
        id: id++,
        src: "../pillimages/yfi8.png",
        alt: "yfi",
        text: "",
        tags: "yfi concepts"
    },
    {
        id: id++,
        src: "../pillimages/yfi9.png",
        alt: "yfi",
        text: "",
        tags: "yfi concepts"
    },
    {
        id: id++,
        src: "../pillimages/yfi10.png",
        alt: "yfi",
        text: "",
        tags: "yfi concepts"
    },
    {
        id: id++,
        src: "../pillimages/badger3.png",
        alt: "badger",
        text: "",
        tags: "badger faction banner"
    },
    {
        id: id++,
        src: "../pillimages/badger2.png",
        alt: "badger",
        text: "",
        tags: "badger concepts"
    },
    {
        id: id++,
        src: "../pillimages/badger1.png",
        alt: "badger",
        text: "",
        tags: "badger concepts"
    },
    {
        id: id++,
        src: "../pillimages/dogepepel.png",
        alt: "doge",
        text: "",
        tags: "doge 3d pepel head wearable"
    },
    {
        id: id++,
        src: "../pillimages/uni1.jpeg",
        alt: "uni",
        text: "",
        tags: "uniswap faction banner"
    },
    {
        id: id++,
        src: "../pillimages/uni7.png",
        alt: "uni",
        text: "",
        tags: "uniswap concepts"
    },
    {
        id: id++,
        src: "../pillimages/uni8.png",
        alt: "uni",
        text: "",
        tags: "uniswap concepts"
    },
    {
        id: id++,
        src: "../pillimages/uni9.png",
        alt: "uni",
        text: "",
        tags: "uniswap concepts"
    },
    {
        id: id++,
        src: "../pillimages/uni10.png",
        alt: "uni",
        text: "",
        tags: "uniswap concepts"
    },
    {
        id: id++,
        src: "../pillimages/ohm1.jpeg",
        alt: "ohm",
        text: "",
        tags: "ohm olympus concepts"
    },
    {
        id: id++,
        src: "../pillimages/ohm4.png",
        alt: "ohm",
        text: "",
        tags: "ohm olympus concepts"
    },
    {
        id: id++,
        src: "../pillimages/ohm5.png",
        alt: "ohm",
        text: "",
        tags: "ohm olympus concepts"
    },
    {
        id: id++,
        src: "../pillimages/ohm6.png",
        alt: "ohm",
        text: "",
        tags: "ohm olympus concepts"
    },
    {
        id: id++,
        src: "../pillimages/alch2.jpeg",
        alt: "alch",
        text: "",
        tags: "alcx alchemix concepts"
    },
    {
        id: id++,
        src: "../pillimages/alch5.png",
        alt: "alch",
        text: "",
        tags: "alcx alchemix concepts"
    },
    {
        id: id++,
        src: "../pillimages/alch6.png",
        alt: "alch",
        text: "",
        tags: "alcx alchemix concepts"
    },
    {
        id: id++,
        src: "../pillimages/sush1.png",
        alt: "sushi",
        text: "",
        tags: "sushi faction banner"
    },
    {
        id: id++,
        src: "../pillimages/alch1.jpeg",
        alt: "alch",
        text: "",
        tags: "alcx alchemix faction banner"
    },
    {
        id: id++,
        src: "../pillimages/triphash.jpeg",
        alt: "hash",
        text: "",
        tags: "2d hashmonks earthcrusher"
    },
    {
        id: id++,
        src: "../pillimages/clownpep.jpeg",
        alt: "3dpepel",
        text: "",
        tags: "3d pepel"
    },
    {
        id: id++,
        src: "../pillimages/dbzpep.jpeg",
        alt: "3dpepel",
        text: "",
        tags: "3d pepel"
    },
    {
        id: id++,
        src: "../pillimages/horsememe.jpeg",
        alt: "meme",
        text: "",
        tags: "meme roadmap"
    },
    {
        id: id++,
        src: "../pillimages/holoarmor.png",
        alt: "arc",
        text: "",
        tags: "arclamp concepts holoarmor"
    },
    {
        id: id++,
        src: "../pillimages/holomandala.png",
        alt: "arc",
        text: "",
        tags: "arclamp concepts holomandala"
    },
    {
        id: id++,
        src: "../pillimages/egohashmonk.jpeg",
        alt: "egohash",
        text: "",
        tags: "2d egodeth hashmonk"
    },
    {
        id: id++,
        src: "../pillimages/shroomwarrior.jpeg",
        alt: "shrigma",
        text: "",
        tags: "shroomwarrior 2d hashmonk"
    },
    {
        id: id++,
        src: "../pillimages/arc3.jpeg",
        alt: "arc",
        text: "",
        tags: "arclamp"
    },
    {
        id: id++,
        src: "../pillimages/arc2.jpeg",
        alt: "arc",
        text: "",
        tags: "arclamp"
    },
    {
        id: id++,
        src: "../pillimages/arc1.jpeg",
        alt: "arc",
        text: "",
        tags: "arclamp"
    },
    {
        id: id++,
        src: "../pillimages/3dandre.png",
        alt: "3dandre",
        text: "",
        tags: "3d andre"
    },
    {
        id: id++,
        src: "../pillimages/3dandrehead.png",
        alt: "3dandre",
        text: "",
        tags: "3d andre head"
    },
    {
        id: id++,
        src: "../pillimages/yellowparrot.png",
        alt: "3dpepel",
        text: "",
        tags: "3d pepel yellow parrot"
    },
    {
        id: id++,
        src: "../pillimages/arcpepel.jpeg",
        alt: "arc",
        text: "",
        tags: "arclamp"
    },
    {
        id: id++,
        src: "../pillimages/archash.jpeg",
        alt: "arc",
        text: "",
        tags: "arclamp"
    },
    {
        id: id++,
        src: "../pillimages/arpepel.jpeg",
        alt: "3dpepel",
        text: "",
        tags: "3d pepel white"
    },
    {
        id: id++,
        src: "../pillimages/3dwhitepepel.jpeg",
        alt: "3dpepel",
        text: "",
        tags: "3d pepel white"
    },
    {
        id: id++,
        src: "../pillimages/whitepepel2.jpeg",
        alt: "pepel",
        text: "",
        tags: "2d pepel white"
    },
    {
        id: id++,
        src: "../pillimages/pepel_07.png",
        alt: "3dpepel",
        text: "",
        tags: "3d pepel yellow"
    },
    {
        id: id++,
        src: "../pillimages/pepelcroc.jpeg",
        alt: "3dpepel",
        text: "",
        tags: "3d pepel crocodile"
    },
    {
        id: id++,
        src: "../pillimages/3dpuppel.jpeg",
        alt: "3dpepel",
        text: "",
        tags: "3d pepel"
    },
    {
        id: id++,
        src: "../pillimages/puppel.jpeg",
        alt: "puppel",
        text: "",
        tags: "2d pepel"
    },
    {
        id: id++,
        src: "../pillimages/backpack.jpeg",
        alt: "backpack",
        text: "",
        tags: "backpack concepts"
    },
    {
        id: id++,
        src: "../pillimages/comic1.jpeg",
        alt: "comic",
        text: "",
        tags: "comic"
    },
    {
        id: id++,
        src: "../pillimages/cobrain.png",
        alt: "cobrain",
        text: "",
        tags: "2d pepel cobrain cobie"
    },
    {
        id: id++,
        src: "../pillimages/hypepyramid.jpeg",
        alt: "hype",
        text: "",
        tags: "hypepill"
    },
    {
        id: id++,
        src: "../pillimages/3dhashconcept.jpeg",
        alt: "hashconcept",
        text: "",
        tags: "concepts"
    },
    {
        id: id++,
        src: "../pillimages/sushipill.jpeg",
        alt: "sushi",
        text: "",
        tags: "sushipill"
    },
    {
        id: id++,
        src: "../pillimages/pillschem.jpeg",
        alt: "chem",
        text: "",
        tags: ""
    },
    {
        id: id++,
        src: "../pillimages/aavepill.jpeg",
        alt: "aave",
        text: "",
        tags: "aavepill"
    },
    {
        id: id++,
        src: "../pillimages/shadowkitreveal.jpeg",
        alt: "shadowkit",
        text: "",
        tags: "shadowpakt flamer suit"
    },
    {
        id: id++,
        src: "../pillimages/attributes.jpeg",
        alt: "attrs",
        text: "",
        tags: ""
    },
    {
        id: id++,
        src: "../pillimages/modes.jpeg",
        alt: "modes",
        text: "",
        tags: ""
    },
    {
        id: id++,
        src: "../pillimages/pepcolor2.jpeg",
        alt: "pepcolor",
        text: "",
        tags: "2d pepels"
    },
    {
        id: id++,
        src: "../pillimages/pepgalaxybrain.jpeg",
        alt: "galaxybrain",
        text: "",
        tags: "2d pepel"
    },
    {
        id: id++,
        src: "../pillimages/pepcolor1.jpeg",
        alt: "pepcolor",
        text: "",
        tags: "2d pepels"
    },
    {
        id: id++,
        src: "../pillimages/rektpill.jpeg",
        alt: "rekt",
        text: "",
        tags: "rektpill"
    },
    {
        id: id++,
        src: "../pillimages/chainspace.jpeg",
        alt: "space",
        text: "An attempt to create the first definitive map of Chainspace",
        tags: "map of Chainspace"
    },
    {
        id: id++,
        src: "../pillimages/portalglobe.png",
        alt: "globe",
        text: "",
        tags: "portal"
    },
    {
        id: id++,
        src: "../pillimages/kirbonite.jpeg",
        alt: "kirb",
        text: "By order of Yield Lord Andre, Blue Kirby was to be made into Kirbonite",
        tags: "kirbonite"
    },
    {
        id: id++,
        src: "../pillimages/blockworm.jpeg",
        alt: "blockworm",
        text: "Blockworms share a temporal connection to each block they engrave/process",
        tags: "blockworm"
    },
    {
        id: id++,
        src: "../pillimages/cron.jpeg",
        alt: "cron",
        text: "Cron's Sarcophagus preserves his body after its corruption led to the collapse of his yield empire",
        tags: "Cron's Sarcophagus"
    },
    {
        id: id++,
        src: "../pillimages/egodethcult.png",
        alt: "egodethcult",
        text: "The eyes and ears of The Guardian of the Genesis Cube",
        tags: "egodeth cult"
    },
    {
        id: id++,
        src: "../pillimages/shadowpakt.png",
        alt: "shadowpakt",
        text: "A group guided by the Shadowpak, seeking to initiate and sustain The Cycle",
        tags: "shadopakt cycle"
    },
    {
        id: id++,
        src: "../pillimages/trach.jpeg",
        alt: "trach",
        text: "Tracheopteryx of Yield Clan Yearn",
        tags: "Tracheopteryx of Yield Clan Yearn"
    },
    {
        id: id++,
        src: "../pillimages/maki.jpeg",
        alt: "maki",
        text: "Leader of the Yield Clan Sushi. Little is currently known of the pseudosecretive figure",
        tags: "Leader of the Yield Clan Sushi"
    },
    {
        id: id++,
        src: "../pillimages/stani.png",
        alt: "stani",
        text: "Leader of the Yield Clan Aave. The Yield Lord Stani possesses the Ape Crown of Cron and is protected by his three pet Memwraiths",
        tags: "Leader of the Yield Clan Aave Yield Lord Stani memwraiths"
    },
    {
        id: id++,
        src: "../pillimages/pillhead.png",
        alt: "pillhead",
        text: "Made from the Genesis Cube. Tasked to restore the Genesis Cube in order to initiate The Regenesis Event",
        tags: "pillhead"
    },
    {
        id: id++,
        src: "../pillimages/pak.png",
        alt: "pak",
        text: "The sentient polyhedron known as “PAK” exists simultaneously within, across, through, between and beyond Chainspace",
        tags: "pak"
    },
    {
        id: id++,
        src: "../pillimages/kain.png",
        alt: "kain",
        text: "Leader of the Yield Clan Synthetix. The Yield Lord Kain mastered the craft of synthetic construction - the ability to create artificial versions of organic objects",
        tags: "Leader of the Yield Clan Synthetix Yield Lord Kain"
    },
    {
        id: id++,
        src: "../pillimages/andre.png",
        alt: "andre",
        text: "Leader of the Yield Clan Yearn. The Yield Lord Andre, known as the Octoape, has augmented his body to maximize the coding of hyper-effective yield strategies",
        tags: "Leader of the Yield Clan Yearn Yield Lord Andre Octoape"
    },
    {
        id: id++,
        src: "../pillimages/vitalik.png",
        alt: "vitalik",
        text: "Vitalik the Vyper-God is a prime architect of the Ethereum chain, designer of the EVM and custodian and teacher of the Vyper language",
        tags: "Vitalik Vyper God ethereum"
    },
    {
        id: id++,
        src: "../pillimages/banteg.png",
        alt: "banteg",
        text: "A renegade Yield Hunter allied with the Yield Clan Yearn",
        tags: "Yield Clan Yearn bunny"
    },
    {
        id: id++,
        src: "../pillimages/unigod.png",
        alt: "unigod",
        text: "A sentient code function, created to maintain the balance of de/centralization across Chainspace",
        tags: "unigod"
    },
    {
        id: id++,
        src: "../pillimages/shadowpak.png",
        alt: "shadowpak",
        text: "An animated corpse composed of burnt PAK-matter and $ASH. Currently guiding its agents in The Shadowpakt to initiate and sustain The Cycle",
        tags: "shadowpakt"
    },
    {
        id: id++,
        src: "../pillimages/cz.png",
        alt: "cz",
        text: "The C.Z.A.R. (Centralized Autonomous Response) is a sentient code function, created to maintain the balance of de/centralization across Chainspace due to a flaw in the EVM",
        tags: "czar"
    },
    {
        id: id++,
        src: "../pillimages/unisock.png",
        alt: "unisock",
        text: "The Unisockpuppet is an odd, single-minded creature devoted to promoting its creator’s agenda",
        tags: "unisock"
    },
    {
        id: id++,
        src: "../pillimages/genesisevent.png",
        alt: "genevent",
        text: "",
        tags: "genesis event"
    },
    {
        id: id++,
        src: "../pillimages/octo3d.jpeg",
        alt: "3dpepel",
        text: "",
        tags: "3d pepel"
    },
    {
        id: id++,
        src: "../pillimages/octoface.png",
        alt: "pepel",
        text: "",
        tags: "2d pepel"
    },
    {
        id: id++,
        src: "../pillimages/4leg3d.jpeg",
        alt: "3dpepel",
        text: "",
        tags: "3d pepel"
    },
    {
        id: id++,
        src: "../pillimages/4leg.png",
        alt: "pepel",
        text: "",
        tags: "2d pepel"
    },
    {
        id: id++,
        src: "../pillimages/memfruitQUEEN.png",
        alt: "memqueen",
        text: "",
        tags: "queen memfruit illustrium",
        className: "noborder"
    },
    {
        id: id++,
        src: "../pillimages/etherrock.png",
        alt: "etherrock",
        text: "",
        tags: "ether rock"
    },
    {
        id: id++,
        src: "../pillimages/loompox.png",
        alt: "loompox",
        text: "",
        tags: "2d pepel loompox"
    },
    {
        id: id++,
        src: "../pillimages/pepeleye.jpeg",
        alt: "pepeleye",
        text: "",
        tags: "pepel eye"
    },
    {
        id: id++,
        src: "../pillimages/redmask.png",
        alt: "hashmonk",
        text: "",
        tags: "2d hashmonk"
    },
    {
        id: id++,
        src: "../pillimages/spirit.png",
        alt: "hashmonk",
        text: "",
        tags: "2d hashmonk"
    },
    {
        id: id++,
        src: "../pillimages/cloudy.png",
        alt: "hashmonk",
        text: "",
        tags: "2d hashmonk"
    },
    {
        id: id++,
        src: "../pillimages/cirrus.png",
        alt: "hashmonk",
        text: "",
        tags: "2d hashmonk"
    },
    {
        id: id++,
        src: "../pillimages/frogmouth.png",
        alt: "pepel",
        text: "",
        tags: "2d pepel"
    },
    {
        id: id++,
        src: "../pillimages/whitepepel.png",
        alt: "pepel",
        text: "",
        tags: "2d pepel white"
    },
    {
        id: id++,
        src: "../pillimages/kungfu.png",
        alt: "pepel",
        text: "",
        tags: "2d pepel"
    },
    {
        id: id++,
        src: "../pillimages/shadowpepel.png",
        alt: "shadow",
        text: "",
        tags: "2d pepel shadowpakt flamer suit"
    },
    {
        id: id++,
        src: "../pillimages/frogger.png",
        alt: "frogtank",
        text: "",
        tags: "2d pepel"
    },
    {
        id: id++,
        src: "../pillimages/parrotpepel.png",
        alt: "parrot",
        text: "",
        tags: "2d pepel parrot"
    },
    {
        id: id++,
        src: "../pillimages/hashmonks.png",
        alt: "hashmonks",
        text: "Hashmonks",
        tags: "hashmonks"
    },
    {
        id: id++,
        src: "../pillimages/hashcolor.png",
        alt: "hashcolor",
        text: "",
        tags: "hashmonks"
    },
    {
        id: id++,
        src: "../pillimages/pepels.png",
        alt: "pepels",
        text: "Pepels",
        tags: "pepels"
    },
    {
        id: id++,
        src: "../pillimages/memwraith.png",
        alt: "memwraith",
        text: "A SYNTH Memwraith pet you receive when boosting with a Memwraith pill",
        tags: "memwraith 2d hashmonk"
    },
    {
        id: id++,
        src: "../pillimages/capsuledao.jpeg",
        alt: "capsuledao",
        text: "",
        tags: "capsuledao"
    },
    {
        id: id++,
        src: "../pillimages/memportal.jpeg",
        alt: "memportal",
        text: "Hashmonk stepping through a Memfruit portal",
        tags: "memfruit memportal"
    },
    {
        id: id++,
        src: "../pillimages/2d3dmaki.jpeg",
        alt: "2d3dmaki",
        text: "",
        tags: "sushi concepts"
    },
    {
        id: id++,
        src: "../pillimages/andrevid.jpeg",
        alt: "andre",
        text: "Yield Lord Andre, featured in the upcoming Genesis video",
        tags: "andre"
    },
    {
        id: id++,
        src: "../pillimages/earthcrusher.jpeg",
        alt: "earthcrusher",
        text: "A maskless Hashmonk with Earthcrusher arms + legs",
        tags: "2d hashmonk earthcrusher"
    },
    {
        id: id++,
        src: "../pillimages/pz1.jpeg",
        alt: "pz1",
        text: "PILLS logo - PZ-01",
        tags: "pz01 logo"
    },
    {
        id: id++,
        src: "../pillimages/pz2.jpeg",
        alt: "pz2",
        text: "Two different forms, each with their own lore, wearables and gameplay mechanics",
        tags: "pz01 forms"
    },
    {
        id: id++,
        src: "../pillimages/pz3.jpeg",
        alt: "pz3",
        text: "PILLS avatars will launch with four features: Leveling, Attributes, Wearables, & Factions",
        tags: "pz01 features"
    },
    {
        id: id++,
        src: "../pillimages/pz4.jpeg",
        alt: "pz4",
        text: "Your avatar will accrue XP automatically, over time. Higher levels unlock new wearables, universe locations, lore, and increase your reputation points cap",
        tags: "pz01 level"
    },
    {
        id: id++,
        src: "../pillimages/pz5.jpeg",
        alt: "pz5",
        text: "Ability scores and traits give you deep customization options",
        tags: "pz01 attributes"
    },
    {
        id: id++,
        src: "../pillimages/pz6.jpeg",
        alt: "pz6",
        text: "A full body skeleton supports diverse wearable combinations",
        tags: "pz01 wearables"
    },
    {
        id: id++,
        src: "../pillimages/pz7.jpeg",
        alt: "pz7",
        text: "Earn enough reputation points to become a member of a faction and rise through the ranks. Launch factions include Yearn, Olympus, Sushi, Uniswap, and more",
        tags: "pz01 factions"
    },
]

export default galleryImages;