/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { OpenAI } from "@fern-api/openai";

export interface CreateCompletionResponseChunk {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: OpenAI.CompletionChoice[];
}
