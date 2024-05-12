import TipoMovimentacao from '#models/tipo_movimentacao'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await TipoMovimentacao.createMany([
      {tipo: "Saque"},
      {tipo: "Transferência - TED "},
      {tipo: "PIX"},
      {tipo: "Deposito"}
    ])
  }
}