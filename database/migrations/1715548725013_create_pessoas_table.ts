import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'pessoas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 50).notNullable()
      table.date('data_nascimento').notNullable()
      table.string('cpf', 11).notNullable()
      table.string('email', 100).notNullable()
      table.string('telefone', 50).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}