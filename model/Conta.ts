
// Criando os atributos da classe
export class Conta {
    private _numero: number
    private _agencia: number
    private _tipo: number
    private _titular: string
    private _saldo: number

    //O Constructor é mandatório
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number){
        this._numero = numero
        this._agencia = agencia
        this._tipo = tipo
        this._titular = titular
        this._saldo = saldo
    }

    // Metodos get e set (a estrutura é algo padronizado)
    public get numero(){
        return this._numero
    }

    public set numero(numero: number){
        this._numero = numero
    }
    
    public get agencia(){
        return this._agencia
    }

    public set agencia(agencia: number){
        this._agencia = agencia
    }

    public get tipo(){
        return this._tipo
    }

    public set tipo(tipo: number){
        this._tipo = tipo
    }

    public get titular(){
        return this._titular
    }

    public set titular(titular: string){
        this._titular = titular
    }
    
    public get saldo(){
        return this._saldo
    }

    public set saldo(saldo: number){
        this._saldo = saldo
    }
    
// criação de métodos especificos para funcionalidade da conta
    public sacar(valor: number): boolean {

        if(this._saldo < valor){
            console.log('\n Saldo Insuficiente!')
            return false
        }

// essa condição é caso for saldo positivo, o saque é realizado
        this._saldo = this._saldo - valor
        return true
    }

//O Método Depositar foi definido como void porquê ele não precisa retornar uma confirmação
    public depositar(valor: number): void {
        this._saldo = this._saldo + valor
    }

// O Método Visualizar foi definido como void 
// porquê ele não precisa retornar uma confirmação, apenas exibir os dados de um Objeto da Classe Conta no console
    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados da Conta:");
        console.log("*****************************************************");
        console.log("Numero da Conta: " + this._numero);
        console.log("Agência: " + this._agencia);
        console.log("Tipo da Conta: " + tipo);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo.toFixed(2));
        console.log("*****************************************************\n\n");
    }


}