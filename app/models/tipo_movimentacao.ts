import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TipoMovimentacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare tipo: string
  
}