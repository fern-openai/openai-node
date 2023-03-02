/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { OpenAiApi } from "@fern-api/open-ai";

export interface CreateChatCompletionRequest {
    /** ID of the model to use. */
    model: string;
    /** The messages to generate chat completions for, in the [chat format](https://platform.openai.com/docs/guides/chat/introduction). */
    messages: OpenAiApi.ChatCompletionRequestMessage[];
    /** Minimum `0` and maximum `2` */
    temperature?: number;
    /** Minimum `0` and maximum `1` */
    topP?: number;
    /** How many chat completion choices to generate for each input message. Minimum `1` and maximum `128` */
    n?: number;
    /**
     * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message.
     *
     */
    stream?: boolean;
    /** Up to 4 sequences where the API will stop generating further tokens. */
    stop?: string[];
    /** The maximum number of tokens allowed for the generated answer. By default, the number of tokens the model can return will be (4096 - prompt tokens). */
    maxTokens?: number;
    /** Minimum `-2` and maximum `2` */
    presencePenalty?: number;
    /** Minimum `-2` and maximum `2` */
    frequencyPenalty?: number;
    /**
     * Modify the likelihood of specified tokens appearing in the completion.
     * Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100.
     * Mathematically, the bias is added to the logits generated by the model prior to sampling.
     * The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.
     *
     */
    logitBias?: Record<string, number | undefined>;
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids).
     *
     */
    user?: string;
}
