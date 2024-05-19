
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Empresa extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nomeEmpresarial: string

  @column()
  declare razaoSocial: string

  @column()
  declare cnpj: string

  @column()
  declare email: string

}