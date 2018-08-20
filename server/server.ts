import { AppFactory } from './app';

const app = AppFactory.create();

import { LoggerFactory } from './util/LoggerFactory';
const logger = LoggerFactory.getLogger();

/**
 * Start Express server.
 */
const server = app.listen(app.get('port'), () => {
    // console.log(
    //     '  App is running at http://localhost:%d in %s mode',
    //     app.get('port'),
    //     app.get('env')
    // );
    // console.log('  Press CTRL-C to stop\n');
    logger.info(
        '  App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env')
    );
    logger.info('  Press CTRL-C to stop\n');
});

export default server;
