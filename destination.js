//const { default: axios } = require("axios");

const submitButton = document.querySelector("#submitButton");
let stateSearch = document.querySelector("#state");
let citySearch = document.querySelector("#city");
let dateSearch = document.querySelector("#date");
let state;
let city;
let date;

submitButton.addEventListener("click", run);

function run(event) {
  event.preventDefault();
  
  stateSearch = stateSearch.value;
  
  citySearch = citySearch.value;
  citySearch = citySearch.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  citySearch = citySearch.replace(" ", "%20");

  date = dateSearch.value
  console.log(date)

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

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions

https://github.com/huannvictor/consultCEP/blob/99e94806c346aeb7647e1869b528a351a92a61d2/app.js

*/
