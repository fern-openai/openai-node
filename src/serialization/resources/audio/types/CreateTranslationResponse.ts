/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const CreateTranslationResponse: core.serialization.ObjectSchema<
    serializers.CreateTranslationResponse.Raw,
    OpenAI.CreateTranslationResponse
> = core.serialization.object({
    text: core.serialization.string(),
});

export declare namespace CreateTranslationResponse {
    interface Raw {
        text: string;
    }
}
