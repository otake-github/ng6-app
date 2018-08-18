import log4js from 'log4js';
import express from 'express';

log4js.configure('config/log4js.json');

const factory = {
    getLogger: () => {
        return log4js.getLogger();
    },
    getAccessLogHandler: () => {
        const accessLogger = log4js.getLogger('access');
        const options = {
            format: '', level: 'ALL', nolog: '\\.png$'
        };
        const handler: express.Handler = log4js.connectLogger(accessLogger, options);
        return handler;
    }
};

if (process.env.NODE_ENV !== 'production') {
    log4js.getLogger().debug('Logging initialized at debug level');
}

export default factory;

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

