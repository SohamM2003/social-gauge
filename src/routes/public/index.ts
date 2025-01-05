/**************************************
 * expose all api routes from public
 ***************************************/

import Express from 'express';

// create router instance
const router = Express.Router();

import User from './user.route';
User(router);

export default router;
