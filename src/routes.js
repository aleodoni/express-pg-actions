import { Router } from 'express';
import HelloController from './app/controllers/HelloController';

const routes = new Router();

/**
 * Routes without token validation
 */
routes.get('/', HelloController.index);

export default routes;
