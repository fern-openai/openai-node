/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { OpenAiApi } from "@fern-api/open-ai";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Answers {
    interface Options {
        environment?: environments.OpenAiApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Answers {
    constructor(private readonly options: Answers.Options) {}

    public async create(request: OpenAiApi.CreateAnswerRequest): Promise<OpenAiApi.CreateAnswerResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.OpenAiApiEnvironment.Production, "/answers"),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.CreateAnswerRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.CreateAnswerResponse.parseOrThrow(
                _response.body as serializers.CreateAnswerResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.OpenAiApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.OpenAiApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.OpenAiApiTimeoutError();
            case "unknown":
                throw new errors.OpenAiApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}