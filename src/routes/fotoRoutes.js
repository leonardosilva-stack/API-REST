import { Router } from 'express';

import fotoController from '../controllers/FotoController'; // Class ja instanciada
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;
