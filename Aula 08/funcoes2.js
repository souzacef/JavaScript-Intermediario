function Conta(numeroConta, agencia,cpfTitular, saldo) {
    this.numeroConta = numeroConta,
    this.agencia = agencia,
    this.cpfTitular = cpfTitular,
    this.saldo = saldo,

    this.depositar = function(valor) {
        this.saldo += valor;
        return `Saldo atual: ${this.saldo}`;
    },

    this.sacar = function (valor) {
        if (this.saldo < valor) {
           return `Valor: R$ ${valor} é maior que o saldo disponível.`;            
        } else {
            this.saldo -= valor;
            
            return `Saque de R$ ${valor} realizado com sucesso. Saldo atual R$ ${this.saldo} `;            
        }
    }
}

module.exports = {
    Conta
}