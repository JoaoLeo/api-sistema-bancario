import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Movimentacao extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare contaRemetenteId: number

  @column()
  declare contaDestinoId: number

  @column()
  declare tipoId: number

  @column()
  declare valorMovimentacao: number

  @column()
  declare dataMovimentacao: Date
}