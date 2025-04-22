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
            return response.send(valor);
        }
    });
    if(!found){
        res.status(404).send({message: "Não foi encontrantrado!"});
    }
    
}

const createEmpresa = (req,res) => {
    const empresa = req.body;
    if(req.body == null) {
        return res.send({message:"Corpo da mensagem está vazio"});

    }
    empresas.push(empresa)
    res.send(empresas);
}

module.exports = {
    findAllEmpressas,
    createEmpresa,
    find
}