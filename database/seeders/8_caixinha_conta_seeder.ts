import CaixinhaConta from '#models/caixinha_conta'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await CaixinhaConta.createMany([
      {contaId: 5, caixinhaId: 1},
      {contaId: 5, caixinhaId: 3},
      {contaId: 1, caixinhaId: 4}
    ])
  }
}