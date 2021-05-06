// write your code here!
// This variable has the data you're working with

// console.log(data);

// Create a card using JS that represents a single pokemon, use the example image as a reference. You will also find an HTML example commented out in the index.html

function createCard(poki) {
  const cards = document.querySelector(".cards");

  const card = document.createElement("article");

  cards.appendChild(card);

  card.setAttribute("class", "card");

  const h2El = document.createElement("h2");

  card.appendChild(h2El);

  h2El.setAttribute("class", "card--title");

  h2El.innerText = poki.name;

  const img = document.createElement("img");

  img.setAttribute("class", "card--img");

  img.setAttribute("src", poki.sprites.other["official-artwork"].front_default);

  img.setAttribute("width", "256");

  card.appendChild(img);

  const text = document.createElement("div");
  text.setAttribute("class", "card--text");
  card.append(text);

  for (const stat of poki.stats) {
    const p = document.createElement("p");
    text.append(p);
    p.innerText = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
  }
}

for (const pokemon of data) {
  createCard(pokemon);
}

// - Use the exact CSS classes you see in the example HTML to obtain the same style for each card
// - The cards should be nested inside <section class="cards"></section>
// - Use the official-artwork object key as the images for the card. The images are all inside of the sprites key, in each pokemon object
// - Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS
