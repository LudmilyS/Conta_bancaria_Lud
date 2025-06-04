import readlinesync = require("readline-sync");
import { colors } from './src/util/colors'
import { Conta } from "./model/Conta"; // importando a classe conta para dentro do projeto
import { ContaCorrente} from "./model/ContaCorrente";
import { ContaPoupanca } from "./model/ContaPoupanc";

//criação da função main
export function main() {

    let opcao: number

// // Objeto da classe "Contas", isso fará com que possa visualizar os dados no terminal (agora a classe é abstrata, não consigo mais colocala no código)
//     const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
//     conta.visualizar();
//     conta.sacar(10500); // primeira visualização vai dar "saldo insulficiente"
//     conta.visualizar(); // Visualiza quanto tem na conta
//     conta.depositar(5000); // Aqui deposita um valor
//     conta.visualizar(); // nessa opção será visualizado todos os dados da conta novamente com saldo atualizado

// Teste conta Corrente (não esquece de importar a classe para o projeto)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

// Teste conta poupança
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

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
            break
        
        case 2:
            console.log('\nListar todas as contas\n')
            break
        
        case 3:
            console.log('\nBucar conta por número\n')
            break
        
        case 4: 
            console.log('\nAtualizar dados da conta\n')
            break
        
        case 5:
            console.log('\nApagar a conta\n')
            break
        
        case 6:
            console.log('\nSacar\n')
            break
        
        case 7:
            console.log('\nDepositar\n')
            break
        
        case 8:
            console.log('\nTransferir valores entre contas\n')
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
main() // necessário para iniciar a função que criamos inicialmente