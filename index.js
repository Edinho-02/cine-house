const catalogo = require("./catalogo");

function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz,
  };

  catalogo.push(novoFilme);
  console.log("Filme adicionado com sucesso!");
}

function buscarFilme(codigo) {
  const filmeProcurado = catalogo[codigo - 1];
  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }
  console.log(filmeProcurado);
}

/*
buscarFilme(2);
*/

function alterarStatusEmCartaz(codigo, novoStatus) {
  const filmeProcurado = catalogo[codigo - 1];

  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }

  catalogo[codigo - 1].emCartaz = novoStatus;

  console.log("Filme alterado!");
}

//-------------------------------------------------//

/*
adicionarFilme("a", 2, ["joão"], 2020, true)
console.log(catalogo)
*/

//-------------------------------------------------//

/*
buscarFilme(99)
*/

//------------------------------------------------//


const listarFilmesEmCartaz = () => {
  for(let i = 0; i < catalogo.length; i++){
    console.log(catalogo[i].emCartaz ? catalogo[i].titulo : " ")
  }
  }

listarFilmesEmCartaz()
