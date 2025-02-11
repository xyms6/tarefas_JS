// # 9. Sistema de Recomendação de Filmes
const preferencias = {
    "gênero": prompt("Gênero (ação, comédia, drama):").toLowerCase(),
    "ano": prompt("Ano (antes ou depois de 2010):").toLowerCase(),
    "ator": prompt("Ator favorito (opcional):").toLowerCase()
};
const filmes = [
    { "titulo": "Filme Ação 1", "gênero": "ação", "ano": "depois", "ator": "ator 1" },
    { "titulo": "Filme Comédia 1", "gênero": "comédia", "ano": "antes", "ator": "ator 2" },
    { "titulo": "Filme Drama 1", "gênero": "drama", "ano": "depois", "ator": "ator 3" }
];
let recomendado = null;
for (const filme of filmes) {
    if (filme["gênero"] === preferencias["gênero"] && filme["ano"] === preferencias["ano"] && (preferencias["ator"] === "" || filme["ator"].includes(preferencias["ator"]))) {
        recomendado = filme["titulo"];
        break;
    }
}
alert(recomendado ? `Filme recomendado: ${recomendado}` : "Nenhum filme encontrado.");
