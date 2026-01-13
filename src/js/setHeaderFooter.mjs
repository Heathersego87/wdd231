import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
  // disclaimer link
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;

  // page title
  document.querySelector("head > title").textContent = data.fullName;

  // hero image
  const heroImg = document.querySelector(".hero-banner__image");
  heroImg.src = data.images[0].url;
  heroImg.alt = data.images[0].altText || data.images[0].title || data.fullName;

  // hero text (use .hero-banner__info so you don't overwrite the wrapper)
  const heroInfo = document.querySelector(".hero-banner__info");
  heroInfo.innerHTML = parkInfoTemplate(data);
}

function setFooter(data) {
  // your footer has id="park-footer" (and also class="park-footer"), so either works
  const footerEl = document.querySelector("#park-footer");
  footerEl.innerHTML = footerTemplate(data);
}

export default function setHeaderFooter(data) {
  setHeaderInfo(data);
  setFooter(data);
}
