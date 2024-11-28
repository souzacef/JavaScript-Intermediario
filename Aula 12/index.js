const jsonEntrada = '{"nome": "Carlos", "sobrenome": "Souza", "idade": 38, "professor": true, "turmas": [12,14,16,18], "endereco":{ "rua": "Rua das ruas", "numero": 1234, "bairro":"Bairro do bairro","CEP":"12345-678"}}';

const obj = JSON.parse(jsonEntrada);

console.log(obj.turmas[2]);

obj.turmas.map( function(valor, posicao) {
    console.log(`posicão: ${posicao}, valor: ${valor}`);    
})

obj.nome += " Souza";
obj.salario = 100000;

console.log(obj.nome);
console.log(obj.salario);

const jsonString = JSON.stringify(obj);
console.log(jsonString);



