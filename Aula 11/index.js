const json  = '{"nome": "Carlos", "idade": 38, "Professor": true}';
const obj = JSON.parse(json);

console.log(obj);
console.log(obj.nome);

const pessoa = {
    nome: "Carlos",
    sobrenome: "Souza",
    idade: 38,
    altura: 1.80,
    professor: true,

    envelhecer: function () {
        this.idade += 1;
    }
}

// console.log(pessoa);

const json2 = JSON.stringify(pessoa);

console.log(json2);


