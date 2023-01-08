import { Router } from 'express';
import userController from '../controllers/UserController'; // Class ja instanciada
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);

// O usuario logado pode se editar e se excluir
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

// router.put('/:id',  userController.update);
// router.delete('/:id', userController.delete);
export default router;

/**
 * index -> lista todos os usuarios -> GET
 * store -> cria um novo usuario, -> POST
 * delete -> apaga um usuario, -> DELETE
 * show -> mostra um usuario, -> GET
 * update -> atualiza um usuario -> PATCH ou PUT
 */
