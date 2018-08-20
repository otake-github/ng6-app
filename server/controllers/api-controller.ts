import path from 'path';
import { Request, Response, Router } from 'express';

import { LoggerFactory } from '../util/LoggerFactory';
const logger = LoggerFactory.getLogger();

export class ApiController {

    /**
     * GET /
     * Home page.
     */
    index(req: Request, res: Response) {
        const filePath = path.join(__dirname, '../index.html');

        logger.trace('index: __dirname=%s', __dirname);
        logger.trace('index: filePath=%s', filePath);

        res.sendFile(filePath);
    }

    items(req: Request, res: Response) {

        logger.trace('items: START');

        const items = [
            { id: 1, name: 'Windstorm' },
            { id: 2, name: 'Bombasto' },
            { id: 3, name: 'Magneta' },
            { id: 4, name: 'Tornado' }
        ];

        const json = {
            items,
        };


        logger.trace('items: json=%o', json);

        return res.json(json);
    }

}
