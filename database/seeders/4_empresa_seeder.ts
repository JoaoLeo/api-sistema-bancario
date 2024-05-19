import Empresa from '#models/empresa'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Empresa.createMany([
      {nomeEmpresarial: "teste LTDA", razaoSocial: "teste", cnpj:"12345678900122", email: "teste@gmail.com"}
    ])
  }
}