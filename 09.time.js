// Mantenha um ranking de jogadores em um jogo online, onde cada jogador é representado por um objeto com nome e pontuação. Use sort para organizar os 
//jogadores pela pontuação em ordem decrescente e for para imprimir o ranking atualizado.

let jogadores=[
    { nome: "ana", pontos: 8 },
    { nome: "pedro", pontos: 5 },
    { nome: "luciana", pontos: 12 },
    { nome: "gustavo", pontos: 7 },
    { nome: "sandra", pontos: 3 },
    { nome: "rafael", pontos: 9 },
    { nome: "beatriz", pontos: 11 },
    { nome: "fernando", pontos: 6 },
    { nome: "patrícia", pontos: 8 },
    { nome: "rodrigo", pontos: 2 },
    { nome: "joaquim", pontos: 6 },
    { nome: "maria", pontos: 10 },
    { nome: "carlos", pontos: 4 }

];

console.table(jogadores)

 let ordem_desc = jogadores.sort((x,y)=>y.pontos-x.pontos);

 for (const ranking  of ordem_desc) {
     
    console.table("=> " + ranking.nome +  "/"  + ranking.pontos );
 }