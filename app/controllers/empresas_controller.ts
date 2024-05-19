import Empresa from '#models/empresa'
import type { HttpContext } from '@adonisjs/core/http'

export default class EmpresasController {
    async index({request}: HttpContext){

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Empresa.query().paginate(page, perPage)
    };


    async show({params}: HttpContext) {
        return await Empresa.query()
        .where('id' ,params.id)
        .first()
    };


    async store({request}: HttpContext){

        const dados = request.only(["nomeEmpresarial", "razaoSocial","cnpj","email"])
        return await Empresa.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const empresa=  await Empresa.findOrFail(params.id)
        const dados = request.only(["nomeEmpresarial", "razaoSocial","cnpj","email"])
        
        empresa.merge(dados)
    
        return await empresa.save()
    };


    async destroy({params}: HttpContext) {

        const dados =  await Empresa.findOrFail(params.id)

        await dados.delete()

        return {msg:'registro deletado com sucesso', dados}
    };
}