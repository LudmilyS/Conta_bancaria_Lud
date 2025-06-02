import readlinesync = require("readline-sync");

//criação da função main
export function main() {

    let opcao: number

    while (true) {

        //Apenas para imprimir o menu na tela
        console.log("*****************************************************");
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
        console.log("                                                     ");

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