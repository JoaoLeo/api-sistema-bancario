/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CaixinhaContasController from '#controllers/caixinha_contas_controller';
import CaixinhasController from '#controllers/caixinhas_controller';
import ContasController from '#controllers/contas_controller';
import EmpresasController from '#controllers/empresas_controller';
import MovimentacaosController from '#controllers/movimentacaos_controller';
import PessoasController from '#controllers/pessoas_controller';
import TipoContasController from '#controllers/tipo_contas_controller';
import TipoMovimentacoesController from '#controllers/tipo_movimentacaos_controller';
import TipoMovimentacao from '#models/tipo_movimentacao';
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource("/caixinhas-contas", CaixinhaContasController).apiOnly();
router.resource('/caixinhas', CaixinhasController).apiOnly();
router.resource('/contas', ContasController).apiOnly();
router.resource('/empresas', EmpresasController).apiOnly();
router.resource('/movimentacoes', MovimentacaosController).apiOnly();
router.resource('/pessoas', PessoasController).apiOnly();
router.resource('/tipos-contas', TipoContasController).apiOnly();
router.resource('/tipos-movimentacoes', TipoMovimentacoesController).apiOnly();
