/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { OpenAI } from "@fern-api/openai";
import * as environments from "../../../../environments";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";
import * as fs from "fs";
import FormData from "form-data";

export declare namespace File_ {
    interface Options {
        token: core.Supplier<core.BearerToken>;
        organization?: core.Supplier<string | undefined>;
    }
}

export class File_ {
    constructor(private readonly options: File_.Options) {}

    /**
     * @throws {OpenAI.UnauthorizedError}
     */
    public async list(): Promise<OpenAI.ListFilesResponse> {
        const _response = await core.fetcher({
            url: urlJoin(environments.OpenAIEnvironment.Production, "/files"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "OpenAI-Organization": await core.Supplier.get(this.options.organization),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.ListFilesResponse.parseOrThrow(_response.body, {
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
    public async upload(file: File | fs.ReadStream, request: OpenAI.UploadFileRequest): Promise<OpenAI.OpenAiFile> {
        const _request = new FormData();
        _request.append("file", file);
        _request.append("purpose", request.purpose);
        const _response = await core.fetcher({
            url: urlJoin(environments.OpenAIEnvironment.Production, "/files"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "OpenAI-Organization": await core.Supplier.get(this.options.organization),
            },
            contentType: "multipart/form-data",
            body: _request,
        });
        if (_response.ok) {
            return await serializers.OpenAiFile.parseOrThrow(_response.body, {
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
    public async retrieve(fileId: OpenAI.FileId): Promise<OpenAI.OpenAiFile> {
        const _response = await core.fetcher({
            url: urlJoin(
                environments.OpenAIEnvironment.Production,
                `/files/${await serializers.FileId.jsonOrThrow(fileId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "OpenAI-Organization": await core.Supplier.get(this.options.organization),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.OpenAiFile.parseOrThrow(_response.body, {
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
    public async delete(fileId: OpenAI.FileId): Promise<OpenAI.DeleteFileResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                environments.OpenAIEnvironment.Production,
                `/files/${await serializers.FileId.jsonOrThrow(fileId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "OpenAI-Organization": await core.Supplier.get(this.options.organization),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.DeleteFileResponse.parseOrThrow(_response.body, {
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
    public async download(fileId: OpenAI.FileId): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(
                environments.OpenAIEnvironment.Production,
                `/files/${await serializers.FileId.jsonOrThrow(fileId)}/content`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "OpenAI-Organization": await core.Supplier.get(this.options.organization),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.file.download.Response.parseOrThrow(_response.body, {
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
