import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Poupanca extends BaseModel {

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare contaId: number

  @column()
  declare saldo: number

}