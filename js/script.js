// Milestone 1:
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
const iconsArray = [
  {nome:'cat', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'crow', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'dog', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'dove', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'dragon', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'horse', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'hippo', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'fish', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'carrot', prefisso:'fa-', tipo:'fruit', famiglia:'fas '},
  {nome:'apple-alt', prefisso:'fa-', tipo:'fruit', famiglia:'fas '},
  {nome:'lemon', prefisso:'fa-', tipo:'fruit', famiglia:'fas '},
  {nome:'pepper-hot', prefisso:'fa-', tipo:'fruit', famiglia:'fas '},
  {nome:'user-astronaut', prefisso:'fa-', tipo:'person', famiglia:'fas '},
  {nome:'user-graduate', prefisso:'fa-', tipo:'person', famiglia:'fas '},
  {nome:'user-ninja', prefisso:'fa-', tipo:'person', famiglia:'fas '},
  {nome:'user-secret', prefisso:'fa-', tipo:'person', famiglia:'fas '},
];

const icons = document.getElementById('icons');

iconsArray.forEach((element) => {
  // destructuring
  const {nome, prefisso, tipo, famiglia} = element;
  icons.innerHTML +=
  `<div class="icon-container">
    <div class="single-icon"><i class="${famiglia}${prefisso}${nome}"></i></div>
    <div class="icon-name">${nome}</div>
  </div>`;
});

// Milestone 2:
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.

// let arrayColors = [];
let arrayTypes = [];

icons.innerHTML = '';

iconsArray.forEach((element) => {
  // destructuring
  const {nome, prefisso, tipo, famiglia} = element;

  if (tipo === 'animal') {
    element.colore = 'green';
  }
  if (tipo === 'fruit') {
    element.colore = 'red';
  }
  if (tipo === 'person') {
    element.colore = 'blue';
  }

  if (!arrayTypes.includes(element.tipo)) {
    arrayTypes.push(element.tipo);
  };

  icons.innerHTML +=
  `<div class="icon-container">
    <div class="single-icon" style="color:${element.colore}"><i class="${famiglia}${prefisso}${nome}"></i></div>
    <div class="icon-name">${nome}</div>
  </div>`;
});

// Milestone 3:
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
const typeOption = document.getElementById('type-select');

// aggiungo una option per ogni tipo di icona
arrayTypes.forEach((element) => {
  typeOption.innerHTML +=
  `<option value="${element}">${element}</option>`
});

const selector = $('#type-select');
let animalIcons;
let fruitIcons;
let personIcons;

selector.change(function() {
  // icons.innerHTML = '';
  let valore = $(this).val();

  if (valore === 'animal') {
    animalIcons = iconsArray.filter((element, index, array) => {
      return element.tipo === 'animal'
    });
    icons.innerHTML = '';
    animalIcons.forEach((element) => {
      // destructuring
      const {nome, prefisso, tipo, famiglia} = element;
      icons.innerHTML +=
      `<div class="icon-container">
        <div class="single-icon" style="color:${element.colore}"><i class="${famiglia}${prefisso}${nome}"></i></div>
        <div class="icon-name">${nome}</div>
      </div>`;
    });
  }

  if (valore === 'fruit') {
    fruitIcons = iconsArray.filter((element, index, array) => {
      return element.tipo === 'fruit'
    });
    icons.innerHTML = '';
    fruitIcons.forEach((element) => {
      // destructuring
      const {nome, prefisso, tipo, famiglia} = element;
      icons.innerHTML +=
      `<div class="icon-container">
        <div class="single-icon" style="color:${element.colore}"><i class="${famiglia}${prefisso}${nome}"></i></div>
        <div class="icon-name">${nome}</div>
      </div>`;
    });
  }

  if (valore === 'person') {
    personIcons = iconsArray.filter((element, index, array) => {
      return element.tipo === 'person'
    });
    icons.innerHTML = '';
    personIcons.forEach((element) => {
      // destructuring
      const {nome, prefisso, tipo, famiglia} = element;
      icons.innerHTML +=
      `<div class="icon-container">
        <div class="single-icon" style="color:${element.colore}"><i class="${famiglia}${prefisso}${nome}"></i></div>
        <div class="icon-name">${nome}</div>
      </div>`;
    });

  }
})
