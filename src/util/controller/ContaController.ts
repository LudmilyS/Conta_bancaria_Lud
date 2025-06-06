import { Conta } from "../../../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from '../colors';

export class ContaController implements ContaRepository{

    //Criação de um array para criar a lista contas
    private listaContas: Array<Conta> = new Array<Conta>()
    numero: number = 0 // criando a variável numero, que irá guardar o numero da ultima conta criada

     //Criação do método auxiliar para procurar um numero da conta
    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero)

        if (buscaConta !== null){
            buscaConta.visualizar()
        } else{
            console.log(colors.fg.red, '\nA conta número: ', numero, 'não foi encontrada!', colors.reset)
        }
    }

    //Criação da assinatura do método listar contas
    listarTodas(): void {
        for(let conta of this.listaContas){ //O 'for' irá ajudar a percorrer a lista do array criada acima
            conta.visualizar()
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta) //o Push está sendo usado para colocar um novo objetona Classe conta (é um objeto do Array)
        console.log('\nA conta número: ', conta.numero, 'foi criada com sucesso')
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero)

        if (buscaConta !== null){
        
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta
            console.log('\nA conta número: ', conta.numero, 'foi atualizada com sucesso')
        } else{
            console.log('\nA conta número: ', conta.numero, 'não foi encontrada!!')
        }
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero)

        if (buscaConta !== null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1)  //o splice usado para exluir a conta
            console.log(colors.fg.red, '\nA conta número: ', numero, 'foi apagada com sucesso!!', colors.reset)

        } else {
            console.log('\nA conta número: ', numero, 'não foi encontrada!!')
        }
    }

    sacar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero)

        if (conta !== null) {

            if(conta.sacar(valor) === true) {
                console.log('\nO saque na conta número: ', numero, ' foi efetuado com sucesso!')
        } else {
            console.log('\nA conta número: ', numero, ' não foi encontrada!!')
        }
    }
}

    public depositar(numero: number, valor: number): void {
        let conta = this.buscarNoArray(numero)

        if (conta !== null) {
            conta.depositar(valor)
            console.log('\nO depósito na conta número: ', numero, ' foi efetuado com sucesso!!')
        } else {
            console.log('\nA conta numero: ', numero, ' não foi encontrada!')
        }
    }
    
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        let contaOrigem = this.buscarNoArray(numeroOrigem)
        let contaDestino = this.buscarNoArray(numeroDestino)

        if (contaOrigem !== null && contaDestino !== null) {
            if (contaOrigem.sacar(valor) === true) {
                contaDestino.depositar(valor)
                console.log('\nA transferência da conta número: ', numeroOrigem, ' para a conta número: ', numeroDestino, 
                    ' foi efetuada com sucesso!!')
            } else {
                console.log('\nA conta número: ', numeroOrigem, ' e/ou a conta número: ', numeroDestino, 
                    ' não foram encontradas!')
            }
        }
    }

    //Metodo auxiliar para gerar o número da conta
public gerarNumero(): number {
    return ++ this.numero // O "++" está sendo usado como incremento
    }

    //checagem da existencia da conta
public buscarNoArray(numero: number): Conta | null {

    for(let conta of this.listaContas){
        if (conta.numero === numero)
            return conta
    }
    return null
    }

}