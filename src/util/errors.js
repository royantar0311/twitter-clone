class GeneralError extends Error {
    getStatus() {
        return this.status;
    }
    getMessage() {
        return this.message;
    }
}
export class AccessDenied extends GeneralError {
    constructor(message = 'Access Denied') {
        super(message);
        this.status = 401;
    }
}

export class BadRequest extends GeneralError {
    constructor(message = 'Bad Request') {
        super(message);
        this.status = 400;
    }
}