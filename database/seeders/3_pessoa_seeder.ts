import Pessoa from '#models/pessoa'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Pessoa.createMany([
      {nome: "Anakin Skywalker", dataNascimento: new Date() , cpf: "12345678911", email: "TheChosenOne@gmail.com", telefone: "61112231456"},
      {nome: "Paul Atreides", dataNascimento: new Date() , cpf: "00000000000", email: "muadbid@gmail.com", telefone: "61112231456"},
      {nome: "Stannis Baratheon", dataNascimento: new Date() , cpf: "11111111111", email: "theOneTrueKing@gmail.com", telefone: "61112231456"},
      {nome: "Peter Parker", dataNascimento: new Date() , cpf: "22222222222", email: "spiderman@gmail.com", telefone: "61112231456"},
      {nome: "Magneto", dataNascimento: new Date() , cpf: "33333333333", email: "xmen@gmail.com", telefone: "61112231456"}
    ])
  }
}