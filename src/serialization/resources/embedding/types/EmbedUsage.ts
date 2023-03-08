/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const EmbedUsage: core.serialization.ObjectSchema<serializers.EmbedUsage.Raw, OpenAI.EmbedUsage> =
    core.serialization.object({
        promptTokens: core.serialization.property("prompt_tokens", core.serialization.number()),
        totalTokens: core.serialization.property("total_tokens", core.serialization.number()),
    });

export declare namespace EmbedUsage {
    interface Raw {
        prompt_tokens: number;
        total_tokens: number;
    }
}
