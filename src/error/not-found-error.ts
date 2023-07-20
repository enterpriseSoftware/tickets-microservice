import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
    statusCode: number = 404;

    constructor() {
        super('Route Not Found Error');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors(){
        return [{ message: "Not Found" }]; 
    }
}