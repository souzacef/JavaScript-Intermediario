class Pessoa {
    constructor (nome, idade, altura, genero) {
        this.nome = nome,
        this.idade = idade,
        this.altura = altura,
        this.genero = genero
    }

    nomeIdade = function () {
        return this.nome + " " + this.idade;
    }
}

class Professor extends Pessoa{
    constructor (nome, idade, altura, genero, salario, turmas) {
        super(
            nome, idade, altura, genero
        );
        this.salario = salario,
        this.turmas = turmas
    }
}

const prof = new Professor("Carlos", 38, 1.88, "M", 100000, 16);

console.log(prof);
