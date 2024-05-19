import Caixinha from '#models/caixinha'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Caixinha.createMany([
      {saldo: 300},
      {saldo: 3000},
      {saldo: 50},
      {saldo: 3},
      {saldo: 100},
    ])
  }
}