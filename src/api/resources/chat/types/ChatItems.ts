/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { OpenAI } from "@fern-api/openai";

export interface ChatItems {
    index: number;
    message: OpenAI.ChatCompletionResponseMessage;
    finishReason: string;
}
