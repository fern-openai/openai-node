/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const ChatCompletionResponseMessage: core.serialization.ObjectSchema<
    serializers.ChatCompletionResponseMessage.Raw,
    OpenAI.ChatCompletionResponseMessage
> = core.serialization.object({
    role: core.serialization.lazy(async () => (await import("../../..")).AuthorRole),
    content: core.serialization.string(),
});

export declare namespace ChatCompletionResponseMessage {
    interface Raw {
        role: serializers.AuthorRole.Raw;
        content: string;
    }
}
