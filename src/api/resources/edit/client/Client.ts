/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { OpenAI } from "@fern-api/openai";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Edit {
    interface Options {
        environment?: environments.OpenAIEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Edit {
    constructor(private readonly options: Edit.Options) {}

    /**
     * Creates a new edit for the provided input, instruction, and parameters.
     */
    public async create(request: OpenAI.CreateEditRequest): Promise<OpenAI.CreateEditResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.OpenAIEnvironment.Production, "/edits"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.CreateEditRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.CreateEditResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.OpenAIError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OpenAIError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.OpenAITimeoutError();
            case "unknown":
                throw new errors.OpenAIError({
                    message: _response.error.errorMessage,
                });
        }
    }

    private async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
