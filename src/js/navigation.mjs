// navigation.mjs

function mainMenuHandler(ev) {
  let target = ev.target;

  const globalNav = document.querySelector(".global-nav");
  globalNav.classList.toggle("show");

  // if we clicked something inside the button (svg/span), climb to the button
  if (target.tagName !== "BUTTON") {
    target = target.closest("button");
  }

  // set aria-expanded based on open/closed
  const isOpen = globalNav.classList.contains("show");
  target.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function subMenuHandler(ev) {
  const submenu = ev.currentTarget
    .closest("li")
    .querySelector(".global-nav__submenu");

  if (!submenu) return;

  submenu.classList.toggle("show");
  ev.currentTarget.querySelector(".icon")?.classList.toggle("rotate");
}

export default function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  const subMenuToggles = document.querySelectorAll(
    ".global-nav__split-button__toggle"
  );

  if (menuButton) {
    menuButton.addEventListener("click", mainMenuHandler);
  }

  subMenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", subMenuHandler);
  });
}