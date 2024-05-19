import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Conta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare pessoaId: number

  @column()
  declare empresaId: number

  @column()
  declare tipoId: number

  @column()
  declare dataAbertura: Date

  @column()
  declare numero: string

  @column()
  declare agencia: string
  
  @column()
  declare saldo: number
}