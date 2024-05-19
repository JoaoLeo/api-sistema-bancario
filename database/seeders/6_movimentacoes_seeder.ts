import Movimentacao from '#models/movimentacao'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Movimentacao.createMany([
      {contaRemetenteId: 1, contaDestinoId: 4, tipoId: 3, valorMovimentacao: 100, dataMovimentacao: new Date()},
      {contaRemetenteId: 3, contaDestinoId: 5, tipoId: 2, valorMovimentacao: 50, dataMovimentacao: new Date()},
      {contaRemetenteId: 4, contaDestinoId: 2, tipoId: 1, valorMovimentacao: 75, dataMovimentacao: new Date()}
    ])
  }
}