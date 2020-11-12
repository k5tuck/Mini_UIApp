// Importing Modules
import ajax from "./ajax.js";
import { makeElements, getElements } from "./elements.js";

// Importing Data from API and Creating Input Field
ajax("https://randomuser.me/api/", (data) => {
  let parsed_data = JSON.parse(data);
  console.log(parsed_data);
  console.log(parsed_data.results[0].name.last);
  createCard(parsed_data);
});

const getData = (input) => input;
function addCard() {
  ajax("https://randomuser.me/api/", (data) => {
    let parsed_data = JSON.parse(data);
    createCard(parsed_data);
  });
}

let header = getElements(".top-header");
let input = makeElements("div", { class: "input" });
let newButton = makeElements("button");
newButton.innerText = "New Person";
input.append(newButton);
header.append(input);
newButton.addEventListener("click", () => {
  addCard();
});

let main = makeElements("main", { class: "main" });

function createCard(input) {
  let b = getElements("body");
  let card = makeElements("div", { class: "card" });

  let name = makeElements("h3");
  name.innerText = `${input.results[0].name.title}. ${input.results[0].name.first} ${input.results[0].name.last}`;
  let image = makeElements("img");
  let source = input.results[0].picture.medium;
  image.src = source;
  let location = makeElements("h4");
  location.innerText = `${input.results[0].location.city}, ${input.results[0].location.country}`;
  let phone = makeElements("h5");
  phone.innerText = input.results[0].cell;

  let remove = makeElements("button");
  remove.innerText = "x";

  remove.addEventListener("click", (evt) => {
    console.dir(evt.target);
    evt.target.parentNode.parentNode.removeChild(evt.target.parentNode);
  });

  card.append(remove, name, image, location, phone);
  main.append(card);
  b.append(main);
}
