import Pessoa from '#models/pessoa'
import type { HttpContext } from '@adonisjs/core/http'

export default class PessoasController {
    
    public async index({}: HttpContext) {
      const pessoas = await Pessoa.all()
      return pessoas
    }
  

    public async show({ params }: HttpContext) {
      const pessoa = await Pessoa.findOrFail(params.id)
      return pessoa
    }
  

    public async store({ request, response }: HttpContext) {
      const data = request.only(['nome', 'dataNascimento', 'cpf', 'email', 'telefone'])
      const pessoa = await Pessoa.create(data)
      return response.created(pessoa)
    }
  

    public async update({ params, request }: HttpContext) {
      const pessoa = await Pessoa.findOrFail(params.id)
      const data = request.only(['nome', 'dataNascimento', 'cpf', 'email', 'telefone'])
      pessoa.merge(data)
      await pessoa.save()
      return pessoa
    }
  

    public async destroy({ params, response }: HttpContext) {
      const pessoa = await Pessoa.findOrFail(params.id)
      await pessoa.delete()
      return response.noContent()
    }
  }