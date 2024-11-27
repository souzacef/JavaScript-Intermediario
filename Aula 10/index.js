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
    constructor (nome, idade, altura, genero, turmas, salario) {
        super(
            nome,
            idade,
            altura,
            genero
        )
        this.turmas = turmas,
        this.salario = salario
    }
}

const prof = new Professor("Carlos", 38, 1.80, "M", 16, 100000);

console.log(prof);
