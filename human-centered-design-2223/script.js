// Get the elements
const scrolBovenKnop = document.querySelector(".scrol-boven-knop");
const scrolOnderKnop = document.querySelector(".scrol-onder-knop");
const kopieerKnop = document.querySelector(".kopieer-knop");
const plakKnop = document.querySelector(".plak-knop");
const tekstInput = document.querySelector(".input-text");
const tekstParagraaf = document.querySelector("p");

// ---- COPY ADN PASTE TEXT FUNCTIONS ----

// Add event listeners
kopieerKnop.addEventListener("click", kopieerTekst);
plakKnop.addEventListener("click", plakTekst);

// Function to copy text to localStorage
function kopieerTekst() {
  const tekst = tekstParagraaf.innerText;
  localStorage.setItem("gekopieerdeTekst", tekst);
  //   alert("Tekst is Gekopieerd!");
}

// Function to paste text from localStorage
function plakTekst() {
  const gekopieerdeTekst = localStorage.getItem("gekopieerdeTekst");
  //   alert("Tekst is Geplakt!");
  if (gekopieerdeTekst) {
    tekstInput.value = gekopieerdeTekst;
  }
}

// ---- SCROLLING FUNCTIONS ----

let scrollInterval;

scrolBovenKnop.addEventListener("mousedown", function () {
  scrollInterval = setInterval(function () {
    window.scrollBy(0, -50);
  }, 50);
});

scrolBovenKnop.addEventListener("mouseup", function () {
  clearInterval(scrollInterval);
});

scrolOnderKnop.addEventListener("mousedown", function () {
  scrollInterval = setInterval(function () {
    window.scrollBy(0, 50);
  }, 50);
});

scrolOnderKnop.addEventListener("mouseup", function () {
  clearInterval(scrollInterval);
});

// ---- START AND STOP SELECTING FUNCTIONS ---

// Select text function
let selectionStart = null;
let selectionEnd = null;

const selecteerKnop = document.querySelector(".selecteer-knop");
selecteerKnop.addEventListener("click", () => {
  const paragraph = document.querySelector("p");
  selectionStart = 0;
  selectionEnd = 1;
  paragraph.focus();

  const selectInterval = setInterval(() => {
    if (selectionEnd <= paragraph.innerText.length) {
      paragraph.setSelectionRange(selectionStart, selectionEnd);
      selectionEnd++;
    } else {
      clearInterval(selectInterval);
    }
  }, 50);
  //   alert("Selectie start");
});

// Stop selecting function
const stopKnop = document.querySelector(".stop-knop");
stopKnop.addEventListener("click", () => {
  const paragraph = document.querySelector("p");
  clearInterval(selectInterval);
  selectionEnd--;
  paragraph.setSelectionRange(selectionStart, selectionEnd);
  //   alert("Selectie Stop");
});

// ---- VUUUUUR ----

const vulkaanKnop = document.querySelector(".vulkaan-knop");
vulkaanKnop.addEventListener("click", () => {
  const fireEmojis = document.createElement("div");
  fireEmojis.innerHTML = "🔥🔥🔥🔥🔥🔥🔥🔥";
  fireEmojis.style.position = "fixed";
  fireEmojis.style.bottom = "0";
  fireEmojis.style.left = "0";
  fireEmojis.style.fontSize = "50px";
  document.body.appendChild(fireEmojis);

  let pos = -100;
  const fireInterval = setInterval(() => {
    fireEmojis.style.transform = `translate(${pos}px, ${pos}px) rotate(${
      pos / 2
    }deg)`;
    pos += 5;
    if (pos > 100) {
      clearInterval(fireInterval);
      document.body.removeChild(fireEmojis);
    }
  }, 20);
});
