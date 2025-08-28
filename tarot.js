const cardMeanings = {
  "The Fool": "En ny begyndelse, uskyld, eventyr, frihed, tage en chance.",
  "The Magician": "Manifestation, handlekraft, evner, magisk fokus.",
  "The High Priestess": "Intuition, skjult viden, det ubevidste, mystik.",
  "The Empress": "Frugtbarhed, skønhed, natur, overflod.",
  "The Emperor": "Struktur, autoritet, stabilitet, faderenergi.",
  "The Hierophant": "Tradition, tro, åndelig visdom, ritualer.",
  "The Lovers": "Kærlighed, valg, harmoni, dybe relationer.",
  "The Chariot": "Viljestyrke, sejr, målrettethed, bevægelse fremad.",
  "Strength": "Mod, indre styrke, medfølelse, balance.",
  "The Hermit": "Indadvendthed, sjælesøgning, visdom, ensomhed.",
  "Wheel of Fortune": "Skæbne, cyklusser, held, forandring.",
  "Justice": "Retfærdighed, sandhed, konsekvenser, balance.",
  "The Hanged Man": "Opofrelse, nye perspektiver, overgivelse.",
  "Death": "Transformation, afslutning, forvandling, fornyelse.",
  "Temperance": "Balance, tålmodighed, heling, harmoni.",
  "The Devil": "Afhængighed, kontrol, skygger, fristelser.",
  "The Tower": "Pludselig forandring, chok, sammenbrud, opvågning.",
  "The Star": "Håb, tro, fornyelse, inspiration.",
  "The Moon": "Illusion, frygt, drømme, intuition.",
  "The Sun": "Glæde, succes, varme, positivitet.",
  "Judgement": "Dommens time, indre kald, tilgivelse, opvågning.",
  "The World": "Fuldendelse, integration, rejser, resultater.",

  // Wands
  "Ace of Wands": "Ny inspiration, energi, potentiale, skabelse.",
  "2 of Wands": "Planlægning, beslutninger, fremtidsperspektiv.",
  "3 of Wands": "Fremskridt, udvidelse, udforskning, muligheder.",
  "4 of Wands": "Fejring, hjemkomst, harmoni, samvær.",
  "5 of Wands": "Konkurrence, konflikt, uenigheder.",
  "6 of Wands": "Sejr, anerkendelse, succes, selvtillid.",
  "7 of Wands": "Forsvar, stå fast, modstand, mod.",
  "8 of Wands": "Hurtig bevægelse, fremskridt, nyheder.",
  "9 of Wands": "Udholdenhed, prøvelser, grænser.",
  "10 of Wands": "Byrder, ansvar, overbelastning.",
  "Page of Wands": "Eventyrlyst, opdagelse, ny inspiration.",
  "Knight of Wands": "Passion, hastighed, spontanitet, mod.",
  "Queen of Wands": "Selvsikkerhed, varme, karisma, uafhængighed.",
  "King of Wands": "Lederskab, vision, entreprenørskab, styrke.",

  // Cups
  "Ace of Cups": "Ny kærlighed, følelser, intuition, glæde.",
  "2 of Cups": "Partnerskab, harmoni, tiltrækning, balance.",
  "3 of Cups": "Venskab, fejring, fællesskab.",
  "4 of Cups": "Tilbagetrækning, apati, selvransagelse.",
  "5 of Cups": "Sorg, tab, skuffelse, fokus på det negative.",
  "6 of Cups": "Nostalgi, barndom, glæde, forsoning.",
  "7 of Cups": "Valgmuligheder, illusioner, drømme.",
  "8 of Cups": "At gå væk, søgen efter mening, forandring.",
  "9 of Cups": "Tilfredshed, ønsker opfyldt, lykke.",
  "10 of Cups": "Familielykke, harmoni, glæde, kærlighed.",
  "Page of Cups": "Kreativitet, intuition, overraskelser.",
  "Knight of Cups": "Romantik, charme, drømmende energi.",
  "Queen of Cups": "Omsorg, empati, intuition, medfølelse.",
  "King of Cups": "Balance mellem følelser og logik, modenhed.",

  // Swords
  "Ace of Swords": "Klarhed, sandhed, gennembrud, nye idéer.",
  "2 of Swords": "Beslutninger, balance, fastlåst situation.",
  "3 of Swords": "Hjertebrist, sorg, adskillelse.",
  "4 of Swords": "Hvile, helbredelse, pause, refleksion.",
  "5 of Swords": "Konflikt, nederlag, selvinteresse.",
  "6 of Swords": "Overgang, rejse, at komme videre.",
  "7 of Swords": "Bedrag, strategi, skjulte handlinger.",
  "8 of Swords": "Følelse af fangenskab, begrænsning.",
  "9 of Swords": "Angst, bekymringer, søvnløshed.",
  "10 of Swords": "Afslutning, smerte, nederlag.",
  "Page of Swords": "Nysgerrighed, læring, nye idéer.",
  "Knight of Swords": "Hastighed, målrettethed, beslutsomhed.",
  "Queen of Swords": "Uafhængighed, klar kommunikation, indsigt.",
  "King of Swords": "Autoritet, sandhed, intellektuel styrke.",

  // Pentacles
  "Ace of Pentacles": "Muligheder, nye begyndelser, materiel gevinst.",
  "2 of Pentacles": "Balance, fleksibilitet, tilpasning.",
  "3 of Pentacles": "Samarbejde, færdigheder, anerkendelse.",
  "4 of Pentacles": "Stabilitet, kontrol, tilbageholdenhed.",
  "5 of Pentacles": "Mangel, usikkerhed, støtte i svære tider.",
  "6 of Pentacles": "Generøsitet, støtte, balance mellem at give og modtage.",
  "7 of Pentacles": "Tålmodighed, evaluering, langsigtet investering.",
  "8 of Pentacles": "Flid, færdigheder, læring, mestring.",
  "9 of Pentacles": "Selvstændighed, luksus, succes.",
  "10 of Pentacles": "Rigdom, arv, familietraditioner.",
  "Page of Pentacles": "Muligheder, ambition, læring.",
  "Knight of Pentacles": "Stabilitet, tålmodighed, ansvarlighed.",
  "Queen of Pentacles": "Omsorg, tryghed, overflod.",
  "King of Pentacles": "Sikkerhed, succes, stabilitet, velstand."
};

// 🖼 Kort → billede map
const knownImages = {
  "The Hierophant": "/img/thehierophant.png",
  "The Lovers": "/img/thelovers.png",
  "Page of Cups": "/img/pageofcups.png",
  "Ace of Wands": "/img/aceofwands.png",
  "3 of Cups": "/img/3ofcups.png",
  "Queen of Coins": "/img/queenofcoins.png"
};

function createTarotDeck() {
  const majorArcana = [
    "The Fool", "The Magician", "The High Priestess", "The Empress",
    "The Emperor", "The Hierophant", "The Lovers", "The Chariot",
    "Strength", "The Hermit", "Wheel of Fortune", "Justice",
    "The Hanged Man", "Death", "Temperance", "The Devil",
    "The Tower", "The Star", "The Moon", "The Sun",
    "Judgement", "The World"
  ];

  const suits = ["Wands", "Cups", "Swords", "Pentacles"];
  const values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Page", "Knight", "Queen", "King"];

  const minorArcana = [];
  for (const suit of suits) {
    for (const value of values) {
      minorArcana.push(`${value} of ${suit}`);
    }
  }

  return majorArcana.concat(minorArcana);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let cards = shuffle(createTarotDeck());
let isFlipping = false;
let isCardFlipped = false;

const card = document.getElementById("draw-card");
const cardFront = document.querySelector(".card-front");

// Enkeltkort
card.addEventListener("click", () => {
  if (isFlipping) return;

  if (isCardFlipped) {
    card.classList.remove("flipped");
    cardFront.innerHTML = "";
    cardFront.style.backgroundImage = "";
    cardFront.style.backgroundColor = "";
    isCardFlipped = false;
    return;
  }

  if (cards.length === 0) {
    cardFront.innerHTML = "<h2>No more cards!</h2>";
    return;
  }

  const drawn = cards.pop();
  const meaning = cardMeanings[drawn] || "Mystery meaning...";
  const imgPath = knownImages[drawn];

  cardFront.style.display = "flex";
  cardFront.style.flexDirection = "column";
  cardFront.style.justifyContent = "center";
  cardFront.style.alignItems = "center";
  cardFront.style.textAlign = "center";
  cardFront.style.padding = "15px";

  if (imgPath) {
    cardFront.style.backgroundImage = `url("${imgPath}")`;
    cardFront.style.backgroundSize = "cover";
    cardFront.style.backgroundPosition = "center";
    cardFront.innerHTML = `<div style="background: rgba(255,255,255,0.8); padding: 10px; border-radius: 8px;">
                              <h2>${drawn}</h2>
                              <p>${meaning}</p>
                           </div>`;
  } else {
    cardFront.style.backgroundImage = "none";
    cardFront.style.backgroundColor = "white";
    cardFront.innerHTML = `<h2>${drawn}</h2><p>${meaning}</p>`;
  }

  card.classList.add("flipped");
  isCardFlipped = true;
});

// Tre kort
document.getElementById("spread-button").addEventListener("click", () => {
  const spreadContainer = document.getElementById("three-cards");
  spreadContainer.innerHTML = "";
  document.getElementById("draw-card").classList.add("fade", "hidden");

  if (cards.length < 3) {
    spreadContainer.innerHTML = "<p>Der er ikke nok kort tilbage.</p>";
    return;
  }

  const labels = ["Fortid", "Nutid", "Fremtid"];

  for (let i = 0; i < 3; i++) {
    const drawn = cards.pop();
    const meaning = cardMeanings[drawn] || "Mystisk betydning...";
    const imgPath = knownImages[drawn];

    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.width = "300px";
    cardDiv.style.height = "450px";

    let cardFrontContent;
    if (imgPath) {
      cardFrontContent = `<div style="background-image: url('${imgPath}'); background-size: cover; background-position: center; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;">
                             <div style="background: rgba(255,255,255,0.8); padding: 10px; border-radius: 8px;">
                               <strong>${labels[i]}</strong><br>
                               <h3>${drawn}</h3>
                               <p>${meaning}</p>
                             </div>
                           </div>`;
    } else {
      cardFrontContent = `<div style="background: white; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px;">
                            <strong>${labels[i]}</strong><br>
                            <h3>${drawn}</h3>
                            <p>${meaning}</p>
                          </div>`;
    }

    cardDiv.innerHTML = `
      <div class="card-inner">
        <div class="card-back" style="background-image: url('img/bagsidetarot.png'); background-size: cover; background-position: center;"></div>
        <div class="card-front">${cardFrontContent}</div>
      </div>
    `;

    let flipped = false;
    cardDiv.addEventListener("click", () => {
      const content = cardDiv.querySelector(".card-inner");
      flipped = !flipped;
      content.style.transform = flipped ? "rotateY(180deg)" : "rotateY(0deg)";
    });

    spreadContainer.appendChild(cardDiv);
  }

  document.getElementById("spread-button").style.display = "none";
  document.getElementById("single-button").style.display = "block";
});

// Tilbage til enkeltkort
document.getElementById("single-button").addEventListener("click", () => {
  document.getElementById("draw-card").classList.remove("hidden");
  document.getElementById("three-cards").innerHTML = "";
  document.getElementById("single-button").style.display = "none";
  document.getElementById("spread-button").style.display = "block";
});