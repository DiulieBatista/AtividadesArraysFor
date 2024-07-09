let candidatos = [
    { nome: "fulano", votos: ["joaquim", "maria", "ana"] },
    { nome: "ciclano", votos: ["maria", "pedro", "ana", "alberto"] },
    { nome: "beltrano", votos: ["ana", "isabela", "pedro"] },
    { nome: "carlota", votos: ["pedro"] },
    { nome: "fernanda", votos: ["alberto", "isabela"] },
    { nome: "gabriel", votos: ["isabela", "renato"] },
    { nome: "hugo", votos: ["leticia"] },
    { nome: "isadora", votos: ["renato", "samuel"] },
    { nome: "julia", votos: ["samuel"] }
];

console.log("Candidatos e seus votos:");
candidatos.forEach(candidato => {
    console.log(`=> ${candidato.nome} votos: ${candidato.votos.length}`);
});

let maiorVotos = 0;
let candidatoMaisVotado = null;

candidatos.forEach(candidato => {
    if (candidato.votos.length > maiorVotos) {
        maiorVotos = candidato.votos.length;
        candidatoMaisVotado = candidato.nome;
    }
});

if (candidatoMaisVotado !== null) {
    console.log(`\nO candidato com mais votos é ${candidatoMaisVotado} com ${maiorVotos} votos.`);
} else {
    console.log("\nNenhum candidato recebeu votos.");
}



