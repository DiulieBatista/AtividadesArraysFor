//Crie um array de objetos representando doações (nome do doador, valor)
// e um array de instituições, 
//distribua as doações igualmente e use for of para imprimir os detalhes das distribuições
let intituição=["a","b","c","d"];

let doação = [

    {nome:"ana" , valor: 1500.00},
    { nome: "pedro", valor: 1000.00 },
    { nome: "maria", valor: 800.00 },
    { nome: "carlos", valor: 1200.00 },
    { nome: "luciana", valor: 2000.00 },
    { nome: "joão", valor: 600.00 },
    { nome: "sandra", valor: 3000.00 },
    { nome: "gustavo", valor: 2500.00 },
    { nome: "rafael", valor: 1800.00 },
    { nome: "beatriz", valor: 900.00 },
    { nome: "fernanda", valor: 1100.00 },
    { nome: "rodrigo", valor: 700.00 }
];
console.table(doação);
let soma=0;

for (let i = 0; i< doação.length; i++) {
    
soma += doação[i].valor;
     
}
console.log(soma)

let media = soma /4;


 console.log(" o valor para a instituição a "+ media.toFixed(2));
 console.log(" o valor para a instituição b "+ media.toFixed(2));
 console.log(" o valor para a instituição c "+ media.toFixed(2));
 console.log(" o valor para a instituição d "+ media.toFixed(2));
