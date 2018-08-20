// import { Request, Response, Router } from 'express';
import { Router } from 'express';

import { ApiController } from '../controllers/api-controller';

// import { LoggerFactory } from '../util/LoggerFactory';
// const logger = LoggerFactory.getLogger();

export class ApiRouterFactory {
    create() {
        const router = Router();

        this.bindApi(router);

        return router;
    }

    private bindApi(router: Router) {
        const controller = new ApiController();
        router.get('/api', controller.index.bind(controller));
        router.get('/api/items', controller.items.bind(controller));

        return router;
    }

}
