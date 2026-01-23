const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);

  if (!response.ok) {
    console.error("Request failed:", response.status);
    return;
  }

  const data = await response.json();
  doStuff(data);
}

async function getPokemonList(url) {
  const response = await fetch(url);

  if (!response.ok) {
    console.error("List request failed:", response.status);
    return;
  }

  const data = await response.json();
  doStuffList(data);
}

function doStuff(data) {
  results = data;

  const outputElement = document.querySelector("#output");
  outputElement.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.sprites.front_default}" alt="Image of ${data.name}">
  `;

  console.log("first:", results);
}

function doStuffList(data) {
  const pokeListElement = document.querySelector("#outputList");
  let pokeList = data.results;

  // sort alphabetically
  pokeList = pokeList.sort((a, b) => a.name.localeCompare(b.name));

  pokeListElement.innerHTML = "";

  pokeList.forEach((currentItem) => {
    pokeListElement.innerHTML += `<li>${currentItem.name}</li>`;
  });
}

getPokemon(url);
console.log("second:", results);
getPokemonList(urlList);
