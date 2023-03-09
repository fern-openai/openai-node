/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { OpenAI } from "@fern-api/openai";
import * as environments from "../../../../environments";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Classification {
    interface Options {
        token: core.Supplier<core.BearerToken>;
        organization?: core.Supplier<string | undefined>;
    }
}

export class Classification {
    constructor(private readonly options: Classification.Options) {}

    /**
     * Classifies the specified `query` using provided examples. The endpoint first [searches](https://platform.openai.com/docs/api-reference/searches) over the labeled examples to select the ones most relevant for the particular query. Then, the relevant examples are combined with the query to construct a prompt to produce the final label via the [completions](https://platform.openai.com/docs/api-reference/completions) endpoint. Labeled examples can be provided via an uploaded `file`, or explicitly listed in the request using the `examples` parameter for quick tests and small scale use cases.
     *
     * @throws {OpenAI.UnauthorizedError}
     * @throws {OpenAI.RateLimitError}
     * @throws {OpenAI.InternalServerError}
     */
    public async create(request: OpenAI.CreateClassificationRequest): Promise<OpenAI.CreateClassificationResponse> {
        const _response = await core.fetcher({
            url: urlJoin(environments.OpenAIEnvironment.Production, "/completions/classifications"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "OpenAI-Organization": await core.Supplier.get(this.options.organization),
            },
            contentType: "application/json",
            body: await serializers.CreateClassificationRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
        });
        if (_response.ok) {
            return await serializers.CreateClassificationResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new OpenAI.UnauthorizedError();
                case 429:
                    throw new OpenAI.RateLimitError();
                case 500:
                    throw new OpenAI.InternalServerError();
                default:
                    throw new errors.OpenAIError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
