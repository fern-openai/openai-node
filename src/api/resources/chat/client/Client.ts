/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { OpenAI } from "@fern-api/openai";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Chat {
    interface Options {
        environment?: environments.OpenAIEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Chat {
    constructor(private readonly options: Chat.Options) {}

    /**
     * Creates a completion for the chat message
     */
    public createCompletion(
        request: OpenAI.CreateChatCompletionRequest & {
            stream?: false;
        }
    ): Promise<OpenAI.CreateChatCompletionResponse>;
    public createCompletion(
        request: OpenAI.CreateChatCompletionRequest & {
            stream: true;
        },
        cb: (data: OpenAI.CreateChatCompletionResponse) => void,
        opts?: Pick<core.StreamingFetcher.Args, "onError" | "onFinish" | "abortController" | "timeoutMs">
    ): Promise<void>;
    public async createCompletion(
        request: OpenAI.CreateChatCompletionRequest,
        cb?: (data: OpenAI.CreateChatCompletionResponse) => void,
        opts?: Pick<core.StreamingFetcher.Args, "onError" | "onFinish" | "abortController" | "timeoutMs">
    ): Promise<OpenAI.CreateChatCompletionResponse | void> {
        if (request.stream) {
            await core.streamingFetcher({
                url: urlJoin(
                    this.options.environment ?? environments.OpenAIEnvironment.Production,
                    "/chat/completions"
                ),
                method: "POST",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                },
                body: await serializers.CreateChatCompletionRequest.jsonOrThrow(request, {
                    unrecognizedObjectKeys: "strip",
                }),
                onData: async (data) => {
                    const parsed = await serializers.CreateChatCompletionResponse.parse(data, {
                        unrecognizedObjectKeys: "passthrough",
                        allowUnrecognizedUnionMembers: true,
                        allowUnrecognizedEnumValues: true,
                    });
                    if (parsed.ok) {
                        cb?.(parsed.value);
                    } else {
                        opts?.onError?.(parsed.errors);
                    }
                },
                onError: opts?.onError,
                onFinish: opts?.onFinish,
                abortController: opts?.abortController,
                terminator: "[DONE]",
            });
        } else {
            const _response = await core.fetcher({
                url: urlJoin(
                    this.options.environment ?? environments.OpenAIEnvironment.Production,
                    "/chat/completions"
                ),
                method: "POST",
                headers: {
                    Authorization: await this._getAuthorizationHeader(),
                },
                contentType: "application/json",
                body: await serializers.CreateChatCompletionRequest.jsonOrThrow(request, {
                    unrecognizedObjectKeys: "strip",
                }),
            });
            if (_response.ok) {
                return await serializers.CreateChatCompletionResponse.parseOrThrow(_response.body, {
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
    }

    private async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
