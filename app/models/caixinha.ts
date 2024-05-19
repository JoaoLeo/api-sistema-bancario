import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Conta from './conta.js'

export default class Caixinha extends BaseModel {

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare saldo: number

  @manyToMany(()=>Conta, {
    pivotTable: 'caixinha_contas',
    pivotForeignKey: 'caixinha_id',
    pivotRelatedForeignKey: 'conta_id',
  })
  declare contas: ManyToMany<typeof Conta>

}