// importando router para roteamento das rotas
import { Router } from 'express';

import UsersController from './app/controllers/UsersControllers';

// invocando o router
const routes = new Router();

// rotas
routes.post('/users', UsersController.store);

// exportando configurações
export default routes;
