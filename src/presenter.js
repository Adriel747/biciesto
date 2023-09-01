import biciesto from "./sumador.js";

const year = document.querySelector("#year");
const form = document.querySelector("#biciesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

const ano = Number.parseInt(year.value);

  div.innerHTML = "<p>" + biciesto(ano) + "</p>";
});
