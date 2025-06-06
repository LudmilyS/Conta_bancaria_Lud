import readlinesync = require("readline-sync");
import { colors } from './src/util/colors'
import { Conta } from "./model/Conta"; // importando a classe conta para dentro do projeto
import { ContaCorrente} from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanc";
import { ContaController } from "./src/util/controller/ContaController";

//criação da função main
export function main() {

    //Colocando a conta controler no meu menu
    let contas: ContaController = new ContaController()

    //Variáveis auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number
    let titular: string
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'] //criação de um array que irá conter o tipo de conta que o banco oferece

//criado para simplifivcar os testes, já que não temos ainda um banco de dados
    console.log("\nCriar Contas\n");

let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
contas.cadastrar(cc1);

let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
contas.cadastrar(cc2);

let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
contas.cadastrar(cp1);

let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
contas.cadastrar(cp2);

contas.listarTodas();


// // Objeto da classe "Contas", isso fará com que possa visualizar os dados no terminal (agora a classe é abstrata, não consigo mais colocala no código)
//     const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
//     conta.visualizar();
//     conta.sacar(10500); // primeira visualização vai dar "saldo insulficiente"
//     conta.visualizar(); // Visualiza quanto tem na conta
//     conta.depositar(5000); // Aqui deposita um valor
//     conta.visualizar(); // nessa opção será visualizado todos os dados da conta novamente com saldo atualizado

// // Teste conta Corrente (não esquece de importar a classe para o projeto)
//     const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
//     contacorrente.visualizar();
//     contacorrente.sacar(2000);
//     contacorrente.visualizar();
//     contacorrente.depositar(1000);
//     contacorrente.visualizar();

// // Teste conta poupança
//     const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
//     contapoupanca.visualizar();
//     contapoupanca.sacar(200);
//     contapoupanca.visualizar();
//     contapoupanca.depositar(1000);
//     contapoupanca.visualizar();

    while (true) {

        //Apenas para imprimir o menu na tela
        console.log(colors.fg.blue,"*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",colors.reset);

        // para aparecer a opção de digitar no terminal
        console.log('Qual a opção desejada') // usa o console.log primeiro para conseguir deixa-lo com pontuação
        opcao = readlinesync.questionInt('')
    
       if(opcao == 9){
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre() // se refere a função sobre criada a partir da linha 80
            process.exit(0);
        }

        // Condição para cada número que o usuário escolher
    switch (opcao){
        case 1:
            console.log('\nCriar uma conta\n')

            console.log('Digite o número da agência: ')
            agencia = readlinesync.questionInt('')

            console.log('Digite o nome do Titular da conta: ')
            titular = readlinesync.question('')

            console.log('Digite o tipo da conta: ')
            tipo = readlinesync.keyInSelect(tipoContas,'', {cancel: false}) + 1 /*foi somado o número 1 na opção escolhida, 
            porque ao fazer a leitura das opções, será armazenado na variável 'tipo' o índice do Array (inicia em zero)*/

            console.log('Digite o saldo da conta (R$): ')
            saldo = readlinesync.questionFloat('')

            //inicia um switch case para obter ambos tipos de conta
            switch(tipo){
                case 1:
                    console.log('Digite o limite da conta (R$): ')
                    limite = readlinesync.questionFloat('')
                    contas.cadastrar(
                        new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
                    break
                
                case 2:
                    console.log('Digite o dia do aniversário da Conta Poupança: ')
                    aniversario = readlinesync.questionInt('')
                    contas.cadastrar(new ContaPoupanca (contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                break
            } 
            keyPress()
            break
        
        case 2:
            console.log('\nListar todas as contas\n')

            contas.listarTodas() //acrescentando a visualização das contas cadastradas (feitas na Conta Controller)

            keyPress()
            break
        
        case 3:
            console.log('\nConsultar dados da conta - por número\n')

            console.log('Digite o número da conta: ')
            numero = readlinesync.questionInt('')
            contas.procurarPorNumero(numero)

            keyPress()
            break
        
        case 4: 
            console.log('\nAtualizar dados da conta\n')

            console.log('Digite o número da conta: ')
            numero = readlinesync.questionInt('')

            let conta = contas.buscarNoArray(numero)

            if (conta !== null){

                console.log('Digite o número da agência: ')
                agencia = readlinesync.questionInt('')

                console.log('Digite o nome do titular da conta: ')
                titular = readlinesync.question('')

                tipo = conta.tipo

                console.log('Digite o saldo da conta (R$): ')
                saldo = readlinesync.questionFloat('')

            switch(tipo) {
                case 1:
                    console.log('Digite o limite da conta (R$): ')
                    limite = readlinesync.questionFloat('')
                    contas.atualizar(
                        new ContaCorrente(numero, agencia, tipo, titular, saldo, limite))
                break
                
                case 2:
                    console.log('Digite o Dia do aniversário da Conta Poupança: ')
                    aniversario = readlinesync.questionInt('')
                    contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario))
                
                break
                }
                } else {
                    console.log('\nA conta numero: ', numero, 'não foi encontrada!')
                }
                
                keyPress()
                break

        case 5:
            console.log('\nApagar a conta\n')

            console.log('Digite o número da conta: ')
            numero = readlinesync.questionInt('')
            contas.deletar(numero)

            keyPress()
            break
        
        case 6:
            console.log('\nSacar\n')

            console.log('Digite o número da conta: ')
            numero = readlinesync.questionInt('')

            console.log('\nDigite o valor do saque (R$): ')
            valor = readlinesync.questionFloat('')

            contas.sacar(numero,valor)

            keyPress()
            break
        
        case 7:
            console.log('\nDepositar\n')

            console.log('Digite o número da conta: ')
            numero = readlinesync.questionInt()

            console.log('\nDigite o valor do depósito (R$): ')
            valor = readlinesync.questionFloat()

            contas.depositar(numero, valor)

            keyPress()
            break
        
        case 8:
            console.log('\nTransferir valores entre contas\n')

            console.log('Digite o número da conta origem: ')
            numero = readlinesync.questionInt('')

            console.log('Digite o número da conta de depósito: ')
            numeroDestino = readlinesync.questionInt('')

            console.log('\nDigite o valor de depósito (R$): ')
            valor = readlinesync.questionFloat('')

            contas.transferir(numero, numeroDestino, valor)

            keyPress()
            break
        
        
        default:
            console.log('\nOpção Inválida!')
    }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Ludmily Oliveira - ludmily.oliveira@hotmail.com");
    console.log("github.com/LudmilyS");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}


main() // necessário para iniciar a função que criamos inicialmente