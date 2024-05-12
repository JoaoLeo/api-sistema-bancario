import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'poupancas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('conta_id').unsigned().notNullable()
      table.float('saldo')

      table
      .foreign('conta_id')
      .references('id')
      .inTable('contas')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}