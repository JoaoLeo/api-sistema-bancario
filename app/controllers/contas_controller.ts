import Conta from '#models/conta'
import type { HttpContext } from '@adonisjs/core/http'

export default class ContasController {

    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Conta.query().paginate(page, perPage)
    };


    async show({params}: HttpContext) {
        return await Conta.query()
        .where('id' ,params.id)
        .preload('caixinhas')
        .preload("pessoa")
        .preload("empresa")
        .first()
    };


    async store({request}: HttpContext){

        const dados = request.only(["pessoaId", "empresaId","tipoId", "dataAbertura","numero","agencia","saldo"])
        return await Conta.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const conta=  await Conta.findOrFail(params.id)
        const dados = request.only(["pessoaId", "empresaId","tipoId", "dataAbertura","numero","agencia","saldo"])
        
        conta.merge(dados)
    
        return await conta.save()
    };


    async destroy({params}: HttpContext) {

        const dados =  await Conta.findOrFail(params.id)

        await dados.delete()

        return {msg:'registro deletado com sucesso', dados}
    };
}