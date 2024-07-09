
let sujeitos = ["Maria", "João", "Ana", "Pedro", "Carla", "Leão", "Gato", "Elefante", "Cachorro", "Papagaio"];
let verbos = ["correr", "saltar", "dançar", "cozinhar", "cantar", "escrever", "nadar", "pular", "estudar", "brincar"];
let objetos = ["cadeira", "mesa", "computador", "caneta", "celular", "livro", "óculos", "carro", "bicicleta", "relógio"];



for (let i = 0; i < 5; i++) {
    
    let s = Math.floor(Math.random(sujeitos.length, 0) * sujeitos.length - 0);
    let v = Math.floor(Math.random(verbos.length, 0) * verbos.length - 0);
    let o = Math.floor(Math.random(objetos.length, 0) * objetos.length - 0);

    console.log(`=> ${i+1} ${sujeitos[s]}, ${verbos[v]}, ${objetos[o]}`);
}