class Pessoa {
    constructor (nome, idade, altura, genero) {
        this.nome = nome,
        this.idade = idade,
        this.altura = altura,
        this.genero = genero
    }
    
    infos = function () {
        return this.nome + " " + this.idade + " anos ";
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

    infos = function () {
        return this.nome + " " + this.turmas + " " + this.salario ;
    }

}

class Aluno extends Pessoa {
    constructor(nome, idade, altura, genero, nota, turma, rM) {
        super(
            nome, 
            idade, 
            altura,
            genero
        )
        this.nota = nota,
        this.turma = turma,
        this.rM = rM
    }

    infos = function () {
        return this.nome + " " + this.idade + " anos " + this.rM;
    }

}

const prof = new Professor("Carlos", 38, 1.80, "M", [12,14,16,25], 100000);
const estudante = new Aluno("Eduardo", 12, 1.60, "M", 10, 16, 123456)

console.log(prof);
console.log(estudante);

console.log(prof.infos());
console.log(estudante.infos());

