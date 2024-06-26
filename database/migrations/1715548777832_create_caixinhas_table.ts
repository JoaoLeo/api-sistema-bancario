import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'caixinhas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('saldo')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}