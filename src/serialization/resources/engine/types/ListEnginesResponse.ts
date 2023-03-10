/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const ListEnginesResponse: core.serialization.ObjectSchema<
    serializers.ListEnginesResponse.Raw,
    OpenAI.ListEnginesResponse
> = core.serialization.object({
    object: core.serialization.string(),
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Engine)),
});

export declare namespace ListEnginesResponse {
    interface Raw {
        object: string;
        data: serializers.Engine.Raw[];
    }
}
