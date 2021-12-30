//? const { default: axios } = require("axios");

const submitButton = document.querySelector("#submitButton");
let stateSearch = document.querySelector("#state");
let citySearch = document.querySelector("#city");
let dateSearch = document.querySelector("#date");

var date;
/*
submitButton.addEventListener("click", run);

function run(event) {
  event.preventDefault();

  //* GETTING VALUES OF INPUT FIELDS
  stateSearch = stateSearch.value;
  citySearch = citySearch.value;
  date = dateSearch.value;

  //* VERIFYING IF ALL FIELDS ARE NOT FILLED
  if (stateSearch == "" || citySearch == "" || date == "") {
    window.alert("confira se os campos foram preenchidos corretamente");
    location.reload();
  }
  citySearch = citySearch.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  citySearch = citySearch.replace(" ", "%20");

  //* USING AXIOS TO GET THE CITY AND STATE CORRECTLY
  axios
    .get(`https://viacep.com.br/ws/${stateSearch}/${citySearch}/rua/json/`)
    .then(function (response) {
      if (response.data.error) {
        throw new Error();
      }

      var destinationOutput = [];

      destinationOutput.push(response.data[0].uf);
      destinationOutput.push(response.data[0].localidade);

      teste.innerHTML = "";

      createLine(destinationOutput);
      createLine(destinationOutput.length);
      return destinationOutput;
    });
}

//* FUNCTION TO TEST IF THE CITY AND STATE ARE GETTING COUTH
function createLine(text) {
  var line = document.createElement("p");
  var text = document.createTextNode(text);

  line.appendChild(text);
  teste.appendChild(line);
}
*/

/* 
TODO: para resolver 

* ajustar o texto dentro dos botões cidade e estado
* assegurar o preenchimento dos dados

! como exportar as variáveis: state, city e date para fora do escopo e usar em outras funções

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions

https://github.com/huannvictor/consultCEP/blob/99e94806c346aeb7647e1869b528a351a92a61d2/app.js

*/
