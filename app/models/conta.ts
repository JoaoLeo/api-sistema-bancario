import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import CaixinhaConta from './caixinha_conta.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Pessoa from './pessoa.js'
import Empresa from './empresa.js'
import TipoConta from './tipo_conta.js'
import Caixinha from './caixinha.js'

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

  @belongsTo(() => Pessoa, {
    foreignKey: 'pessoaId',
  })
  declare pessoa: BelongsTo<typeof Pessoa>

  @belongsTo(() => Empresa, {
    foreignKey: 'empresaId',
  })
  declare empresa: BelongsTo<typeof Empresa>

  @belongsTo(() => TipoConta, {
    foreignKey: 'tipoId',
  })
  declare tipo: BelongsTo<typeof TipoConta>

  @manyToMany(() => Caixinha, {
    pivotTable: 'caixinha_contas',
  })
  declare caixinhas: ManyToMany<typeof Caixinha>
}
