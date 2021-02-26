import { Router } from 'express';

import UserController from '../controllers/TemperaturaController';

const PayRoutes = Router();
const userController = new UserController();

PayRoutes.get('/:lat/:lon', userController.create);

export default PayRoutes;
