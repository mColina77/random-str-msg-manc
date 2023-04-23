const messages = [
  "En casa de herrero, cuchillo de palo",
  "Pájaro que comió, voló",
  "Donde hubo fuego, cenizas quedan",
  "Del dicho al hecho hay mucho trecho",
  "No hay mal que por bien no venga",
  "De tal palo tal astilla",
  "No hay peor ciego que el que no quiere ver",
  "El que no corre, vuela",
  "El que mucho abarca poco aprieta",
  "A buen entendedor, pocas palabras",
  "A caballo regalado no se le miran los dientes",
  "A palabras necias, oídos sordos",
  "El que calla otorga",
  "Dime con quién andas y te diré quién eres",
  "El que ríe último, ríe mejor",
  "Hazte fama y échate a dormir",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
}

module.exports = {
  funnyCommit
};