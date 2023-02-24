/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { OpenAiApi } from "@fern-api/open-ai";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Engines {
    interface Options {
        environment?: environments.OpenAiApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Engines {
    constructor(private readonly options: Engines.Options) {}

    public async list(): Promise<OpenAiApi.ListEnginesResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.OpenAiApiEnvironment.Production, "/engines"),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.ListEnginesResponse.parseOrThrow(
                _response.body as serializers.ListEnginesResponse.Raw,
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

    public async retrieve(engineId: OpenAiApi.EngineId): Promise<OpenAiApi.Engine> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.OpenAiApiEnvironment.Production,
                `/engines/${await serializers.EngineId.jsonOrThrow(engineId)}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
        });
        if (_response.ok) {
            return await serializers.Engine.parseOrThrow(_response.body as serializers.Engine.Raw, {
                allowUnknownKeys: true,
            });
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

    public async create(
        engineId: OpenAiApi.EngineId,
        request: OpenAiApi.CreateSearchRequest
    ): Promise<OpenAiApi.CreateSearchResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.OpenAiApiEnvironment.Production,
                `/engines/${await serializers.EngineId.jsonOrThrow(engineId)}/search`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.CreateSearchRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.CreateSearchResponse.parseOrThrow(
                _response.body as serializers.CreateSearchResponse.Raw,
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
