/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const ChatItems: core.serialization.ObjectSchema<serializers.ChatItems.Raw, OpenAI.ChatItems> =
    core.serialization.object({
        index: core.serialization.number(),
        message: core.serialization.lazyObject(async () => (await import("../../..")).ChatCompletionResponseMessage),
        finishReason: core.serialization.property("finish_reason", core.serialization.string()),
    });

export declare namespace ChatItems {
    interface Raw {
        index: number;
        message: serializers.ChatCompletionResponseMessage.Raw;
        finish_reason: string;
    }
}
