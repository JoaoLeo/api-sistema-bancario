import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Conta from './conta.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Caixinha from './caixinha.js'

export default class CaixinhaConta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare contaId: number

  @column()
  declare caixinhaId: number

  @belongsTo(() => Conta, {
    foreignKey: 'contaId'
  })
  declare conta: BelongsTo<typeof Conta>

  @belongsTo(() => Caixinha,{
    foreignKey: 'caixinhaId'
  })
  declare caixinha: BelongsTo<typeof Caixinha>
}
