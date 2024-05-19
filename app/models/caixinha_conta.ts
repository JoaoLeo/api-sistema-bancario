import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class CaixinhaConta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare contaId: number

  @column()
  declare caixinhaId: number

}