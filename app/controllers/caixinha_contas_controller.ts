import CaixinhaConta from '#models/caixinha_conta'
import type { HttpContext } from '@adonisjs/core/http'

export default class CaixinhaContasController {

    async index({request}: HttpContext){
    

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await CaixinhaConta.query().preload("caixinha").preload("conta").paginate(page, perPage)
        // return await CaixinhaContas.query()
    };


    async show({params}: HttpContext) {
        return await CaixinhaConta.query().where("id", params.id).preload("caixinha").preload("conta").firstOrFail()
    };


    async store({request}: HttpContext){

        const dados = request.only(["contaId", "caixinhaId" ])
        return await CaixinhaConta.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const caixinha_conta =  await CaixinhaConta.findOrFail(params.id)
        const dados = request.only(["contaId", "caixinhaId"])
        
        caixinha_conta.merge(dados)
    
        return await caixinha_conta.save()
    };


    async destroy({params}: HttpContext) {

        const caixinha_conta =  await CaixinhaConta.findOrFail(params.id)

        await caixinha_conta.delete()

        return {msg:'registro deletado com sucesso', caixinha_conta}
    };
}