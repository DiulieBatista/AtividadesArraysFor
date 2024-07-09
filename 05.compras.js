
let compras =[]

 let alimentos=[
{ nome:"arroz",valor:20.00,quantidade:2},
{ nome:"feijão",valor:5.00,quantidade:6}
 ];

let maquiagens=[

 { nome:" batom ",valor:15.00,quantidade:1},
 { nome:"sombras ",valor:35.00,quantidade:2}
        
];
let eletronicos=[

{ nome:"fone",valor:50.00,quantidade:1},
{ nome:"tablet",valor:500.00,quantidade:1}
                
];
                        

console.table(compras.alimentos);
console.table(compras.maquiagens);
console.table(compras.eletronicos);

 

for (let carrinho  in  eletronicos ) {  
    console.log("=> compras "+ eletronicos[carrinho].valor );
 }
 for (let carrinho  in  maquiagens ) {  
    console.log("=> compras "+ maquiagens[carrinho].valor );
 }
 for (let carrinho  in  alimentos ) {  
    console.log("=> compras "+ alimentos[carrinho].valor );
 }

let total =0;
let soma= 0;

for (let ele of eletronicos ) {
    total += ele.valor* ele.quantidade;
    console.log("=> o valor total dos  produtos no carrinho e : " + ele.nome + " : " + ele.valor);
}
for (let ali of alimentos) {
    total += ali.valor*ali.quantidade;
    console.log("=> o valor total dos  produtos no carrinho e : " + ali.nome + " : " + ali.valor);
}
for (let maq of maquiagens) {
    total += maq.valor*maq.quantidade;
    console.log("=> o valor total dos  produtos no carrinho e : " + maq.nome + " : " + maq.valor);
}

console.log(" O valor total do carrinho e : " + total);
