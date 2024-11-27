/*  const pessoa  = {
    nome: "Carlos",
    sobrenome: "Souza",
    altura: 1.80,
    idade: 38,

    envelhecer: function(anos) {
        this.idade += anos;
    }
 };

 console.log(typeof(pessoa));
 console.log(pessoa);

 console.log(pessoa.nome);
 console.log(pessoa.idade);
 pessoa.envelhecer(3);
 console.log(pessoa.idade) */

 function novoCarro(modelo, ano, marca, combustivel) {
    this.modelo = modelo;
    this.ano = ano;
    this.marca = marca;
    this.combustivel = combustivel;
 }
let carro = []
carro[0] = new novoCarro("Fusca", 1976, "VolksWagen", "Gasolina");

carro[1] = new novoCarro("Uno", 2010, "Fiat", "Flex");

console.log(carro);

 
 
 
 
 