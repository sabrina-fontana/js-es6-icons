// Milestone 1: *************************************
// - Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
// - Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.
const allIcons = [
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

allIcons.forEach((element) => {
  // destructuring
  const {nome, prefisso, tipo, famiglia} = element;
  icons.innerHTML +=
  `<div class="icon-container">
    <div class="single-icon"><i class="${famiglia}${prefisso}${nome}"></i></div>
    <div class="icon-name">${nome}</div>
  </div>`;
});

// Milestone 2: *************************************
// - Definire un array di colori e associare ad ogni tipo di icona un colore.
// - Visualizzare le icone di colore diverso in base al tipo.
let arrayTypes = [];
let arrayColors = ['green', 'red', 'blue'];
icons.innerHTML = '';

allIcons.forEach((element) => {
  // destructuring
  const {nome, prefisso, tipo, famiglia} = element

  // creo un array dei tipi di icone
  if (!arrayTypes.includes(element.tipo)) {
    arrayTypes.push(element.tipo);
  };
  // indexArrayTypes indica l'indice nell'arrayTypes del 'tipo' di element
  const indexArrayTypes = arrayTypes.indexOf(element.tipo);
  // se indexArrayTypes esiste allora aggiungo a element la chiave colore il cui valore è lo stesso index nell'array dei colori
  if (indexArrayTypes !== -1) {
    element.colore = arrayColors[indexArrayTypes];
  }

  icons.innerHTML +=
  `<div class="icon-container">
    <div class="single-icon" style="color:${element.colore}"><i class="${famiglia}${prefisso}${nome}"></i></div>
    <div class="icon-name">${nome}</div>
  </div>`;

});

// Milestone 3:**************************************
// - Aggiungere una select per filtrare le icone in base al tipo.
// - Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
const typeOption = document.getElementById('type-select');
const selector = $('#type-select');
let animalIcons;
let fruitIcons;
let personIcons;

function showIcons(nameArray) {
  icons.innerHTML = '';
  nameArray.forEach((element) => {
    // destructuring
    const {nome, prefisso, tipo, famiglia} = element;
    icons.innerHTML +=
    `<div class="icon-container">
      <div class="single-icon" style="color:${element.colore}"><i class="${famiglia}${prefisso}${nome}"></i></div>
      <div class="icon-name">${nome}</div>
    </div>`;
  });
};

// aggiungo una option per ogni tipo di icona
arrayTypes.forEach((element) => {
  typeOption.innerHTML +=
  `<option value="${element}">${element}</option>`
});

selector.change(function() {
  let valore = $(this).val();

  // creo un array filtrato per ogni 'tipo'
  let filteredIcons = allIcons.filter((element) => {
    return element.tipo === valore;
  });

  // invoco la funzione con argomento l'array filtrato
  showIcons(filteredIcons);

  // se però il valore dell'option è all mostro tutte le icone
  if (valore === 'all') {
    showIcons(allIcons);
  };
});
