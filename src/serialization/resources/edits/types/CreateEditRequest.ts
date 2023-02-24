/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAiApi } from "@fern-api/open-ai";
import * as core from "../../../../core";

export const CreateEditRequest: core.serialization.ObjectSchema<
    serializers.CreateEditRequest.Raw,
    OpenAiApi.CreateEditRequest
> = core.serialization.object({
    model: core.serialization.string(),
    input: core.serialization.string().optional(),
    instruction: core.serialization.string(),
    n: core.serialization.number().optional(),
    temperature: core.serialization.number().optional(),
    topP: core.serialization.property("top_p", core.serialization.number().optional()),
});

export declare namespace CreateEditRequest {
    interface Raw {
        model: string;
        input?: string | null;
        instruction: string;
        n?: number | null;
        temperature?: number | null;
        top_p?: number | null;
    }
}
