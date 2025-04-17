const findAllEmpressas = (req,res) => {
    res.send("todas as empresas listadas");
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