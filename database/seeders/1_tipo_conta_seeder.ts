import TipoConta from '#models/tipo_conta';
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
      return await TipoConta.createMany([{tipo: "Pessoa Física"}, {tipo: "Pessoa Juridíca"},{tipo: "Estrangeiro"} ]);
  }
}