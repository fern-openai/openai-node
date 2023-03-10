/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";

export class InternalServerError extends errors.OpenAIError {
    constructor() {
        super({
            message: "InternalServerError",
            statusCode: 500,
        });
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
