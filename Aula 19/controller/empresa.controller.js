const { response } = require("express");

const empresas = [
    {
        id: 1,
        nome:"empresa 1",
        numFuncionarios: 100
    },
    {
        id: 2,
        nome:"empresa 2",
        numFuncionarios: 1200
    },
    {
        id: 3,
        nome:"empresa 3",
        numFuncionarios: 5000
    }
]
const findAllEmpressas = (req,res) => {
    res.send(empresas);
}

const find = (req,res) => {
    const id = req.params.id;
    let found = false;

    empresas.map( function(valor){
        if(valor.id == id) {
            found = true;
            return res.send(valor);
        }
    });
    if(!found){
        res.status(404).send({message: "Não foi encontrado!"});
    }
    
}

const createEmpresa = (req,res) => {
    const empresa = req.body;
    if(Object.keys(empresa).length === 0) {
        return res.status(400).send({message:"Corpo da mensagem está vazio"});
    }

    if(!empresa.id){
        return res.status(400).send({message:"O campo 'id' não foi encontrado!"});
    }

    if(!empresa.nome){
        return res.status(400).send({message:"O campo 'nome' não foi encontrado!"});
    }

    if(!empresa.numFuncionarios){
        return res.status(400).send({message:"O campo 'numFuncionarios' não foi encontrado!"});
    }

    empresa.nacionalidade = "brasileira";

    empresas.push(empresa);
    res.status(201).send(empresas);
}

const updateEmpresa = (req,res) => {
    const id = req.params.id;
    const empresa = req.body;
    let found = false;

    if(Object.keys(empresa).length === 0) {
        return res.status(400).send({message:"Corpo da mensagem está vazio"});
    }

    if(!empresa.id){
        return res.status(400).send({message:"O campo 'id' não foi encontrado!"});
    }

    if(!empresa.nome){
        return res.status(400).send({message:"O campo 'nome' não foi encontrado!"});
    }

    if(!empresa.numFuncionarios){
        return res.status(400).send({message:"O campo 'numFuncionarios' não foi encontrado!"});
    }

    empresas.map( function(valor, index){
        if(valor.id == id) {
            found = true;
            empresas[index] = empresa;
            return res.send(empresas[index]);
        }
    });

    if(!found){
        res.status(404).send({message: "Não foi encontrado!"});
    }
}

const deleteEmpresa = (req,res) => {
    const id = req.params.id;
    let found = false;

    empresas.map( function(valor){
        if(valor.id == id) {
            found = true;
            empresas.splice(index,1);
            return res.send(valor);
        }
    });

    if(!found){
        res.status(404).send({message: "Não foi encontrado!"});
    }
    
}

module.exports = {
    findAllEmpressas,
    createEmpresa,
    find,
    updateEmpresa,
    deleteEmpresa
}