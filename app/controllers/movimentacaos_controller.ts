import Movimentacao from '#models/movimentacao'
import type { HttpContext } from '@adonisjs/core/http'

export default class MovimentacaosController {
    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Movimentacao.query().paginate(page, perPage)
    };


    async show({params}: HttpContext) {
        return await Movimentacao.query()
        .where('id' ,params.id)
        .preload("contaRemetente")
        .preload("contaDestino")
        .preload("tipo")
        .first()
    };


    async store({request}: HttpContext){

        const dados = request.only(["contaRemetenteId","contaDestinoId", "tipoId", "valorMovimentacao","dataMovimentacao"])
        return await Movimentacao.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const movimentacao=  await Movimentacao.findOrFail(params.id)
        const dados = request.only(["contaRemetenteId","contaDestinoId", "tipoId", "valorMovimentacao","dataMovimentacao"])
        
        movimentacao.merge(dados)
    
        return await movimentacao.save()
    };


    async destroy({params}: HttpContext) {

        const dados =  await Movimentacao.findOrFail(params.id)

        await dados.delete()

        return {msg:'registro deletado com sucesso', dados}
    };
}