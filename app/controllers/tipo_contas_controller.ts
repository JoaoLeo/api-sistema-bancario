import TipoConta from '#models/tipo_conta'
import type { HttpContext } from '@adonisjs/core/http'

export default class TipoContasController {


    public async index({}: HttpContext) {
        const tiposContas = await TipoConta.all()
        return tiposContas
    }

    public async show({ params }: HttpContext) {
        const tipoConta = await TipoConta.findOrFail(params.id)
        return tipoConta
    }

    public async store({ request, response }: HttpContext) {
        const data = request.only(['tipo'])
        const tipoConta = await TipoConta.create(data)
        return response.created(tipoConta)
    }
    
    public async update({ params, request }: HttpContext) {
        const tipoConta = await TipoConta.findOrFail(params.id)
        const data = request.only(['tipo'])
        tipoConta.merge(data)
        await tipoConta.save()
        return tipoConta
    }
    
    public async destroy({ params, response }: HttpContext) {
        const tipoConta = await TipoConta.findOrFail(params.id)
        await tipoConta.delete()
        return response.noContent()
    }
      
}