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
  {nome:'carrot', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'apple-alt', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'lemon', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'pepper-hot', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'user-astronaut', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'user-graduate', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'user-ninja', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
  {nome:'user-secret', prefisso:'fa-', tipo:'animal', famiglia:'fas '},
];

const icons = document.getElementById('icons');

iconsArray.forEach((element) => {
  // destructuring
  const {nome, prefisso, tipo, famiglia} = element;
  icons.innerHTML +=
  `<div><i class="${famiglia}${prefisso}${nome}"></i> ${nome}</div>
  `;
});
