import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'empresas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome_empresarial', 50).notNullable()
      table.string('razao_social', 50).notNullable()
      table.string('cnpj', 14).notNullable()
      table.string('email', 100).notNullable()

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}