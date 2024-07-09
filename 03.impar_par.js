

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let impar = [];
let par = [];

for (let num of numeros) {
    if (num % 2 === 0) {
      
        par.push(num);
        console.log("O número " + num + " (índice par) dividido por 2 é: " + (num / 2));
    } else {
       
        impar.push(num);
        console.log("O número " + num + " (índice ímpar) multiplicado por 3 é: " + (num * 3));
    }
}

console.log("Números ímpares: " + impar);
console.log("Números pares: " + par);
