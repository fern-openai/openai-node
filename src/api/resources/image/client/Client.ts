/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { OpenAI } from "@fern-api/openai";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";
import * as fs from "fs";
import FormData from "form-data";

export declare namespace Image {
    interface Options {
        environment?: environments.OpenAIEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Image {
    constructor(private readonly options: Image.Options) {}

    /**
     * @throws {OpenAI.UnauthorizedError}
     */
    public async create(request: OpenAI.CreateImageRequest): Promise<OpenAI.ImagesResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.OpenAIEnvironment.Production, "/images/generations"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.CreateImageRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.ImagesResponse.parseOrThrow(_response.body, {
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

    /**
     * @throws {OpenAI.UnauthorizedError}
     */
    public async createEdit(
        image: File | fs.ReadStream,
        mask: File | fs.ReadStream | undefined,
        request: OpenAI.CreateImageEditRequest
    ): Promise<OpenAI.ImagesResponse> {
        const _request = new FormData();
        _request.append("image", image);
        if (mask != null) {
            _request.append("mask", mask);
        }

        _request.append("prompt", request.prompt);
        if (request.n.toString() != null) {
            _request.append("n", request.n.toString());
        }

        if (request.size != null) {
            _request.append("size", request.size);
        }

        if (request.responseFormat != null) {
            _request.append("response_format", request.responseFormat);
        }

        if (request.user != null) {
            _request.append("user", request.user);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.OpenAIEnvironment.Production, "/images/edits"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "multipart/form-data",
            body: _request,
        });
        if (_response.ok) {
            return await serializers.ImagesResponse.parseOrThrow(_response.body, {
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

    /**
     * @throws {OpenAI.UnauthorizedError}
     */
    public async createVariation(
        image: File | fs.ReadStream,
        request: OpenAI.CreateImageVariationRequest
    ): Promise<OpenAI.ImagesResponse> {
        const _request = new FormData();
        _request.append("image", image);
        if (request.n.toString() != null) {
            _request.append("n", request.n.toString());
        }

        if (request.size != null) {
            _request.append("size", request.size);
        }

        if (request.responseFormat != null) {
            _request.append("response_format", request.responseFormat);
        }

        if (request.user != null) {
            _request.append("user", request.user);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.OpenAIEnvironment.Production, "/images/variations"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "multipart/form-data",
            body: _request,
        });
        if (_response.ok) {
            return await serializers.ImagesResponse.parseOrThrow(_response.body, {
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
