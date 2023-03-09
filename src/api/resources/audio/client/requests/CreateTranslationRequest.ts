/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { OpenAI } from "@fern-api/openai";

export interface CreateTranslationRequest {
    /**
     * ID of the model to use. Only `whisper-1` is currently available.
     *
     */
    model: string;
    /**
     * An optional text to guide the model's style or continue a previous audio segment.
     * The [prompt](https://platform.openai.com/docs/guides/speech-to-text/prompting) should match the audio language.
     *
     */
    prompt?: string;
    /**
     * The format of the transcript output.
     *
     */
    responseFormat?: OpenAI.FileFormat;
    /**
     * The sampling temperature, between 0 and 1.
     * Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
     * If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
     *
     */
    temperature?: number;
    response: OpenAI.CreateTranslationResponse;
}
