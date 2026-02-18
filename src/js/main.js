import "../css/style.css"; // we can do this because we are using Vite...
import "../css/home.css";
import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const globalNav = document.querySelector(".global-nav");

  if (!menuButton || !globalNav) return;

  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;

    // if we clicked the svg/text, climb back to the button
    if (target.tagName !== "BUTTON") {
      target = target.closest("button");
    }

    // open/close the menu
    globalNav.classList.toggle("show");

    const isOpen = globalNav.classList.contains("show");
    target.setAttribute("aria-expanded", isOpen ? "true" : "false");
    target.setAttribute("aria-label", isOpen ? "Close Menu" : "Open Menu");
  });
}

async function init() {
  enableNavigation();

  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);

  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
}

init();
