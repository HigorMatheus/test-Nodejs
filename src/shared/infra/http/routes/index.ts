import { Router } from 'express';

import playRoutes from '@modules/playlist/infra/http/routes/Play.routes';

const routes = Router();

routes.use('/temp', playRoutes);

export default routes;
