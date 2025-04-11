const { Conta } = require("./funcoes2");

const novaConta = new Conta(12345,1234,"123.456.789-10", 500);

console.log(novaConta.saldo);

novaConta.depositar(250);

console.log(novaConta.saldo);



const message = novaConta.sacar(1000);

console.log(message);
