import { Conta } from "../../../model/Conta";

export interface ContaRepository {

	// CRUD (criar, listar todas, consultar pelo numero, atualizar e deletar) da Conta
    // Estes Métodos serão implementados na Classe ContaController
	procurarPorNumero(numero: number): void; //assinatura do método
	listarTodas(): void;
	cadastrar(conta: Conta): void;
	atualizar(conta: Conta): void;
	deletar(numero: number): void;
	
	// Criação das assinaturas dos 3 Métodos de Operações Bancárias (sacar, sepositar e transferir), da Classe Conta
	sacar(numero: number, valor: number): void;
	depositar(numero: number, valor: number): void;
	transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
	
}