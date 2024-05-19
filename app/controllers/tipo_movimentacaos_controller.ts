import TipoMovimentacao from '#models/tipo_movimentacao'
import type { HttpContext } from '@adonisjs/core/http'
export default class TipoMovimentacoesController {

    public async index({}: HttpContext) {
      const tiposMovimentacoes = await TipoMovimentacao.all()
      return tiposMovimentacoes
    }
  

    public async show({ params }: HttpContext) {
      const tipoMovimentacao = await TipoMovimentacao.findOrFail(params.id)
      return tipoMovimentacao
    }
  

    public async store({ request, response }: HttpContext) {
      const data = request.only(['tipo'])
      const tipoMovimentacao = await TipoMovimentacao.create(data)
      return response.created(tipoMovimentacao)
    }

    public async update({ params, request }: HttpContext) {
      const tipoMovimentacao = await TipoMovimentacao.findOrFail(params.id)
      const data = request.only(['tipo'])
      tipoMovimentacao.merge(data)
      await tipoMovimentacao.save()
      return tipoMovimentacao
    }
  

    public async destroy({ params, response }: HttpContext) {
      const tipoMovimentacao = await TipoMovimentacao.findOrFail(params.id)
      await tipoMovimentacao.delete()
      return response.noContent()
    }
  }