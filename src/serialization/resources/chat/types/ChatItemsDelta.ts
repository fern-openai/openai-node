/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const ChatItemsDelta: core.serialization.ObjectSchema<serializers.ChatItemsDelta.Raw, OpenAI.ChatItemsDelta> =
    core.serialization.object({
        role: core.serialization.lazy(async () => (await import("../../..")).AuthorRole).optional(),
        conent: core.serialization.string().optional(),
    });

export declare namespace ChatItemsDelta {
    interface Raw {
        role?: serializers.AuthorRole.Raw | null;
        conent?: string | null;
    }
}
