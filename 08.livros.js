//Crie uma biblioteca digital armazenando livros como objetos em um array.
// Cada livro tem um título, autor e ano de publicação. Use for of para percorrer a lista e sort para
// organizar os livros por título ou ano conforme escolha do usuário.


const ler = require('readline-sync');

    let biblioteca = [
        { titulo: "Bíblia", autor: "Deus", ano: 2000 },
        { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
        { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 },
        { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943 },
        { titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", ano: 1866 },
        { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997 },
        { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
        { titulo: "A Metamorfose", autor: "Franz Kafka", ano: 1915 },
        { titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945 }
      ];
console.table(biblioteca)

console.log("--------biblioteca---------------");
console.log("1.organizar os livros por título" );
console.log("2. organizar os livros por ano ");
let opt = ler.questionInt("=>");
let alfabetica ;
let anos;
    switch (opt) {

        case 1:
            
        alfabetica =biblioteca.sort((a,b)=>a.titulo.localeCompare(b.titulo));
     
            break;

        case 2:
     
            anos  = biblioteca.sort((x,y)=>y.ano-x.ano);

            break;

        default:

        console.log("opção invalida ");
            break;
    }
    for (const livros  of biblioteca) {
     
        console.table("=> " + livros.titulo +  "/"  + livros.autor  + "/"+  livros .ano );
    }
    