/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const CreateCompletionResponse: core.serialization.ObjectSchema<
    serializers.CreateCompletionResponse.Raw,
    OpenAI.CreateCompletionResponse
> = core.serialization.object({
    id: core.serialization.string(),
    object: core.serialization.string(),
    created: core.serialization.number(),
    model: core.serialization.string(),
    choices: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).CompletionChoice)
    ),
    usage: core.serialization.lazyObject(async () => (await import("../../..")).CompletionUsage).optional(),
});

export declare namespace CreateCompletionResponse {
    interface Raw {
        id: string;
        object: string;
        created: number;
        model: string;
        choices: serializers.CompletionChoice.Raw[];
        usage?: serializers.CompletionUsage.Raw | null;
    }
}
