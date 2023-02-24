/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAiApi } from "@fern-api/open-ai";
import * as core from "../../../../core";

export const EmbedData: core.serialization.ObjectSchema<serializers.EmbedData.Raw, OpenAiApi.EmbedData> =
    core.serialization.object({
        index: core.serialization.number(),
        object: core.serialization.string(),
        embedding: core.serialization.list(core.serialization.number()),
    });

export declare namespace EmbedData {
    interface Raw {
        index: number;
        object: string;
        embedding: number[];
    }
}