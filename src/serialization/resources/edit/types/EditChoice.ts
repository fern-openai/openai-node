/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const EditChoice: core.serialization.ObjectSchema<serializers.EditChoice.Raw, OpenAI.EditChoice> =
    core.serialization.object({
        text: core.serialization.string().optional(),
        index: core.serialization.number().optional(),
        logprobs: core.serialization.lazyObject(async () => (await import("../../..")).LogProbs).optional(),
        finishReason: core.serialization.property("finish_reason", core.serialization.string().optional()),
    });

export declare namespace EditChoice {
    interface Raw {
        text?: string | null;
        index?: number | null;
        logprobs?: serializers.LogProbs.Raw | null;
        finish_reason?: string | null;
    }
}
