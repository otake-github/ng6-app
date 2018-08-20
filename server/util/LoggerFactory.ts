// import path from 'path';
// import fs from 'fs';

import log4js from 'log4js';
import express from 'express';
import { YamlLoader } from './yaml';

class Factory {

    initialize() {
        const config = new YamlLoader().load();
        console.log('LoggerFactory#initialize(): config=%o', config);
        log4js.configure(config);

        // // const filePath = path.join(__dirname, 'config/log4js.json');
        // const filePath = path.join('E:/git/ng6-app', 'config', 'log4js.json');
        // console.log('LoggerFactory#initialize(): filePath=%s', filePath);
        // if (fs.existsSync(filePath)) {
        //     log4js.configure(filePath);
        // } else {
        //     console.warn('LoggerFactory#initialize(): File not found. filePath=%s', filePath);
        // }
    }

    getLogger() {
        return log4js.getLogger();
    }

    getAccessLogHandler() {
        const accessLogger = log4js.getLogger('access');
        const options = {
            format: '', level: 'ALL', nolog: '\\.png$'
        };
        const handler: express.Handler = log4js.connectLogger(accessLogger, options);
        return handler;
    }
}

if (process.env.NODE_ENV !== 'production') {
    log4js.getLogger().debug('Logging initialized at debug level');
}

const factory = new Factory();
factory.initialize();

export const LoggerFactory = factory;

// import winston from 'winston';
// import { Logger } from 'winston';
// // import { ENVIRONMENT } from './secrets';

// const logger = new (Logger)({
//     transports: [
//         new (winston.transports.Console)({ level: process.env.NODE_ENV === 'production' ? 'error' : 'debug' }),
//         new (winston.transports.File)({ filename: 'debug.log', level: 'debug' })
//     ]
// });

// if (process.env.NODE_ENV !== 'production') {
//     logger.debug('Logging initialized at debug level');
// }

// export default logger;

