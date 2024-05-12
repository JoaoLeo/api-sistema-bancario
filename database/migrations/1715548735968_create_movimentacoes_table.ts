import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'movimentacoes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('conta_remetente_id').unsigned().notNullable()
      table.integer('conta_destino_id').unsigned().notNullable()
      table.integer('tipo_id').unsigned().notNullable()
      table.float('valor_movimentacao').notNullable()
      table.date('data_movimentacao').notNullable()

      table
      .foreign('conta_remetente_id')
      .references('id')
      .inTable('contas')
      table
      .foreign('conta_destino_id')
      .references('id')
      .inTable('contas')
      table
      .foreign('tipo_id')
      .references('id')
      .inTable('tipo_movimentacoes')

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}