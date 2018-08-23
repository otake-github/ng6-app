export abstract class BaseError extends Error {

    // constructor(self: BaseError, target: Function, message: string) {
    constructor(message: string) {
        super(message);
        this.setPrototypeOf(this, new.target);
        // const name = BaseError.constructor.name;
    }

    protected setPrototypeOf<T extends BaseError>(self: T, target: Function) {
        Object.setPrototypeOf(self, target.prototype);
    }
}
