/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const EmbeddingInput: core.serialization.Schema<serializers.EmbeddingInput.Raw, OpenAI.EmbeddingInput> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.list(core.serialization.string()),
        core.serialization.list(core.serialization.number()),
        core.serialization.list(core.serialization.list(core.serialization.number())),
    ]);

export declare namespace EmbeddingInput {
    type Raw = string | string[] | number[] | number[][];
}