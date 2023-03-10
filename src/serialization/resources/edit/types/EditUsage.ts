/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const EditUsage: core.serialization.ObjectSchema<serializers.EditUsage.Raw, OpenAI.EditUsage> =
    core.serialization.object({
        promptTokens: core.serialization.property("prompt_tokens", core.serialization.number()),
        completionTokens: core.serialization.property("completion_tokens", core.serialization.number()),
        totalTokens: core.serialization.property("total_tokens", core.serialization.number()),
    });

export declare namespace EditUsage {
    interface Raw {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    }
}
