import { NegociacoesDoDia } from '../interfaces/negociacao-do-dia.js';
import { Negociacao } from '../models/negociacao.js';

export class NegociacoesService {

    public obterNegociacoesDoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => {
                if (!res.ok) throw new Error('Não foi possível importar as negociações.');
                return res.json();
            })
            .then((dados: NegociacoesDoDia[]) => {
                if (!Array.isArray(dados) || dados.some(dado =>
                    !dado || !Number.isInteger(dado.vezes) || dado.vezes <= 0 ||
                    !Number.isFinite(dado.montante) || dado.montante <= 0)) {
                    throw new Error('A API retornou negociações inválidas.');
                }
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(), 
                        dadoDeHoje.vezes, 
                        dadoDeHoje.montante
                    )
                })
            });
    }
}