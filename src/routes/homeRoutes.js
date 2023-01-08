import { Router } from 'express';
import homeController from '../controllers/HomeController'; // Class ja instanciada

const router = new Router();

router.get('/', homeController.index);

export default router;
