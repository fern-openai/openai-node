/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { OpenAI } from "@fern-api/openai";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Audio {
    interface Options {
        environment?: environments.OpenAIEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Audio {
    constructor(private readonly options: Audio.Options) {}

    /**
     * Transcribes audio into the input language.
     */
    public async transcribe(
        file: File,
        request: OpenAI.CreateTranscriptionRequest
    ): Promise<OpenAI.CreateTranscriptionResponse> {
        const _request = new FormData();
        _request.append("file", file);
        _request.append("model", request.model);
        if (request.prompt != null) {
            _request.append("prompt", request.prompt);
        }

        if (request.responseFormat != null) {
            _request.append("response_format", request.responseFormat);
        }

        if (request.temperature != null) {
            _request.append("temperature", request.temperature.toString());
        }

        if (request.language != null) {
            _request.append("language", request.language);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.OpenAIEnvironment.Production,
                "/audio/transcriptions"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "multipart/form-data",
            body: _request,
        });
        if (_response.ok) {
            return await serializers.CreateTranscriptionResponse.parseOrThrow(_response.body, {
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

    /**
     * Translates audio into into English.
     */
    public async translate(file: File, request: OpenAI.CreateTranslationRequest): Promise<void> {
        const _request = new FormData();
        _request.append("file", file);
        _request.append("model", request.model);
        if (request.prompt != null) {
            _request.append("prompt", request.prompt);
        }

        if (request.responseFormat != null) {
            _request.append("response_format", request.responseFormat);
        }

        if (request.temperature != null) {
            _request.append("temperature", request.temperature.toString());
        }

        _request.append("response", JSON.stringify(request.response));
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.OpenAIEnvironment.Production, "/audio/translations"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "multipart/form-data",
            body: _request,
        });
        if (_response.ok) {
            return;
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
