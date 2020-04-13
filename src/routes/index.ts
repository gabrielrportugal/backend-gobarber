import { Router } from 'express';
import appointmentsRouter from './appoitments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;
