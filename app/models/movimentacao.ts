import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Conta from './conta.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import TipoMovimentacao from './tipo_movimentacao.js'

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

  @belongsTo(() => TipoMovimentacao, {
    foreignKey: 'tipoId'
  })
  declare tipo: BelongsTo<typeof TipoMovimentacao>

  @belongsTo(() => Conta, {
    foreignKey: 'contaRemetenteId'
  })
  declare contaRemetente: BelongsTo<typeof Conta>

  @belongsTo(() => Conta, {
    foreignKey: 'contaDestinoId'
  })
  declare contaDestino: BelongsTo<typeof Conta>
}
