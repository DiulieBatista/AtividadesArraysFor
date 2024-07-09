// Playlist de musicas 


const ler = require('readline-sync');

let Playlist = [];
let soma = 0;
let check = true;
let total = 0;

do {
    let titulo = ler.question("Digite o título de uma música: ");
    let artista = ler.question("Digite o artista: ");
    let duracao = ler.questionFloat("Digite a duração da música: ");

    Playlist.push({ titulo: titulo, artista: artista, duracao: duracao });

    let x = ler.question("Dados cadastrados. Deseja cadastrar outra música ou 'sair' para finalizar? ").toLowerCase();
    
    if (x === 'sair') {
        check = false;
        console.log("Playlist cadastrada");
    }

} while (check);

for (let dur of Playlist) {
    soma += dur.duracao;
    console.log("=> A música " + dur.titulo + " tem duração de: " + dur.duracao);
}

total = soma;
console.log("Total de minutos na playlist: " + total);

