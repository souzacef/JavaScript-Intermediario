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
    res.send("rota find");
}

const createEmpresa = (req,res) => {
    res.send("Empresa criada com sucesso");
}

module.exports = {
    findAllEmpressas,
    createEmpresa,
    find
}