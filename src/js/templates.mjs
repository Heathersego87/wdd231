function getMailingAddress(addresses) {
  return addresses.find((address) => address.type === "Mailing");
}

function getVoicePhone(phoneNumbers) {
  const voiceObj = phoneNumbers.find((phone) => phone.type === "Voice");
  return voiceObj ? voiceObj.phoneNumber : "";
}

export function parkInfoTemplate(info) {
  return `
    <a href="/" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>
  `;
}

export function mediaCardTemplate(info) {
  const cleanName = info.name.replace(" &#x203A;", "");

  return `
    <article class="media-card">
      <a class="media-card__img" href="${info.link}">
        <img src="${info.image}" alt="${cleanName}">
      </a>
      <div class="media-card__body">
        <h2 class="media-card__title">
          <a href="${info.link}">${info.name}</a>
        </h2>
        <p>${info.description}</p>
      </div>
    </article>
  `;
}

export function footerTemplate(info) {
  const mailing = getMailingAddress(info.addresses);
  const voice = getVoicePhone(info.contacts.phoneNumbers);

  return `
    <section class="contact">
      <div class="contact__address">
        <p>${mailing.line1}</p>
        <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p>
      </div>
      <div class="contact__phone">
        <p>${voice}</p>
      </div>
    </section>
  `;
}
