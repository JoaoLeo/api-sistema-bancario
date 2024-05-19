import Conta from '#models/conta'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Conta.createMany([
      {pessoaId: 1, tipoId: 2, dataAbertura: new Date(), numero: "123456", agencia: "agencia sith", saldo: 600},
      {pessoaId: 2, empresaId: 1 ,tipoId: 1, dataAbertura: new Date(), numero: "7891234", agencia: "CHOAM", saldo: 6500},
      {pessoaId: 3, tipoId: 2, dataAbertura: new Date(), numero: "7891234", agencia: "iron bank", saldo: 20},
      {pessoaId: 4, tipoId: 3, dataAbertura: new Date(), numero: "7891234", agencia: "marvel", saldo: 2},
      {pessoaId: 5, tipoId: 1, dataAbertura: new Date(), numero: "7891234", agencia: "marvel 2", saldo: 2},
    ])
  }
}