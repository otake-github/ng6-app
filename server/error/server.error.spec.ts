import { ServerError } from './server.error';

describe('server.error', () => {

    beforeEach(async () => {
    });

    it('should create', () => {
        const error = new ServerError('server error.');
        expect(error).not.toBeNull();
        // expect(error).toBeNull();
    });
});
