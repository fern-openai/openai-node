/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAiApi } from "@fern-api/open-ai";
import * as core from "../../../../core";

export const ListFilesResponse: core.serialization.ObjectSchema<
    serializers.ListFilesResponse.Raw,
    OpenAiApi.ListFilesResponse
> = core.serialization.object({
    object: core.serialization.string(),
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).OpenAiFile)),
});

export declare namespace ListFilesResponse {
    interface Raw {
        object: string;
        data: serializers.OpenAiFile.Raw[];
    }
}