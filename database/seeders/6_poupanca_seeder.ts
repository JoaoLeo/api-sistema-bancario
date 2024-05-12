import Poupanca from '#models/poupanca'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Poupanca.createMany([
      {contaId: 1, saldo: 300},
      {contaId: 2, saldo: 3000},
      {contaId: 3, saldo: 50},
      {contaId: 4, saldo: 3},
      {contaId: 5, saldo: 100},
    ])
  }
}