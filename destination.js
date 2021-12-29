//const { default: axios } = require("axios");

const submitButton = document.querySelector("#submitButton");
let stateSearch = document.querySelector("#state");
let citySearch = document.querySelector("#city");
let state;
let city;

// console.log(stateSearch);
// console.log(citySearch);

submitButton.addEventListener("click", run);

function run(event) {
  event.preventDefault();

  stateSearch = stateSearch.value;

  citySearch = citySearch.value;
  citySearch = citySearch.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  citySearch = citySearch.replace(" ", "%20");

  axios
    .get(`https://viacep.com.br/ws/${stateSearch}/${citySearch}/rua/json/`)
    .then(function (response) {
      
      if (response.data.error) {
        throw new Error();
      }
      state = response.data[0].uf;
      city = response.data[0].localidade;

      console.log(state);
      console.log(city);
      return state, city;
    });

  return stateSearch, citySearch;
}

/* para resolver 

- como exportar as funções state e city para fora do e usar em outras funções

*/