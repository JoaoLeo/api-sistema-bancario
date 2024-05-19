import Caixinha from '#models/caixinha'
import type { HttpContext } from '@adonisjs/core/http'

export default class CaixinhasController {

    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Caixinha.query().paginate(page, perPage)
    };


    async show({params}: HttpContext) {
        return await Caixinha.query()
        .where('id' ,params.id)
        .preload('contas')
        .first()
    };


    async store({request}: HttpContext){

        const dados = request.only(["saldo" ])
        return await Caixinha.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const caixinha=  await Caixinha.findOrFail(params.id)
        const dados = request.only(["saldo"])
        
        caixinha.merge(dados)
    
        return await caixinha.save()
    };


    async destroy({params}: HttpContext) {

        const caixinha =  await Caixinha.findOrFail(params.id)

        await caixinha.delete()

        return {msg:'registro deletado com sucesso', caixinha}
    };
}