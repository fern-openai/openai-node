/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const CreateEmbeddingResponse: core.serialization.ObjectSchema<
    serializers.CreateEmbeddingResponse.Raw,
    OpenAI.CreateEmbeddingResponse
> = core.serialization.object({
    object: core.serialization.string(),
    model: core.serialization.string(),
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).EmbedData)),
    usage: core.serialization.lazyObject(async () => (await import("../../..")).EmbedUsage),
});

export declare namespace CreateEmbeddingResponse {
    interface Raw {
        object: string;
        model: string;
        data: serializers.EmbedData.Raw[];
        usage: serializers.EmbedUsage.Raw;
    }
}
