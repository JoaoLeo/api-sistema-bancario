import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Caixinha extends BaseModel {

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare saldo: number

}