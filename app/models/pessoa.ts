import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Pessoa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare dataNascimento: Date

  @column()
  declare cpf: string

  @column()
  declare email: string

  @column()
  declare telefone: string

}