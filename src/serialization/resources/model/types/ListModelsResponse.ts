/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const ListModelsResponse: core.serialization.ObjectSchema<
    serializers.ListModelsResponse.Raw,
    OpenAI.ListModelsResponse
> = core.serialization.object({
    object: core.serialization.string(),
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Model)),
});

export declare namespace ListModelsResponse {
    interface Raw {
        object: string;
        data: serializers.Model.Raw[];
    }
}
