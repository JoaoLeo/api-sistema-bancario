import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('pessoa_id').unsigned().notNullable()
      table.integer('empresa_id').unsigned().nullable()
      table.integer('tipo_id').unsigned().notNullable()
      table.date('data_abertura').notNullable()
      table.string('numero', 100).notNullable()
      table.string('agencia', 100).notNullable()
      table.float('saldo').notNullable()


      table
      .foreign('pessoa_id')
      .references('id')
      .inTable('pessoas')


      table
      .foreign('empresa_id')
      .references('id')
      .inTable('empresas')

      table
      .foreign('tipo_id')
      .references('id')
      .inTable('tipo_contas')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}