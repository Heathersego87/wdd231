import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// disclaimer link
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.textContent = parkData.fullName;

// page title
document.title = parkData.fullName;

// hero image
const heroImg = document.querySelector(".hero-banner__image");
heroImg.src = parkData.images[0].url;
heroImg.alt =
  parkData.images[0].altText ||
  parkData.images[0].title ||
  parkData.fullName;

// hero text
function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

const heroInfo = document.querySelector(".hero-banner__info");
heroInfo.innerHTML = parkInfoTemplate(parkData);
