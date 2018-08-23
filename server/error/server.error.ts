import { BaseError } from '@@common/error/base.error';

export class ServerError extends BaseError {
    constructor(message: string) {
        super(message);
        this.setPrototypeOf(this, new.target);
    }
}
