/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { OpenAiApi } from "@fern-api/open-ai";

export interface EditChoice {
    text?: string;
    index?: number;
    logprobs?: OpenAiApi.LogProbs;
    finishReason?: string;
}
