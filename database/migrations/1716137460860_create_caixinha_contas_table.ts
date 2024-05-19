import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'caixinha_contas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('conta_id').unsigned().notNullable()
      table.integer('caixinha_id').unsigned().notNullable()

      table
      .foreign('conta_id')
      .references('id')
      .inTable('contas')

      table
      .foreign('caixinha_id')
      .references('id')
      .inTable('caixinhas')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}