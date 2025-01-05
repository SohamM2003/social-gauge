import { Router, Request, Response } from 'express';
import { UserController } from '../../controllers/user/user.controller';

const user = (router: Router) => {

    router.post(
        '/typeComp',
        async (req: Request, res: Response) => {
        const userController = new UserController();
        const response = await userController.typeComp(req.body);
        return res.status(response.status).send(response);
    });

    router.post(
        '/engagement',
        async (req: Request, res: Response) => {
        const userController = new UserController();
        const response = await userController.engagement(req.body);
        return res.status(response.status).send(response);
    });

    router.post(
        '/recommendations',
        async (req: Request, res: Response) => {
        const userController = new UserController();
        const response = await userController.recommendations(req.body);
        return res.status(response.status).send(response);
    });

};

export default user;