/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const OpenAiFile: core.serialization.ObjectSchema<serializers.OpenAiFile.Raw, OpenAI.OpenAiFile> =
    core.serialization.object({
        id: core.serialization.string(),
        object: core.serialization.string(),
        bytes: core.serialization.number(),
        createdAt: core.serialization.property("created_at", core.serialization.number()),
        filename: core.serialization.string(),
        purpose: core.serialization.string(),
        status: core.serialization.string().optional(),
        statusDetails: core.serialization.property(
            "status_details",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
    });

export declare namespace OpenAiFile {
    interface Raw {
        id: string;
        object: string;
        bytes: number;
        created_at: number;
        filename: string;
        purpose: string;
        status?: string | null;
        status_details?: Record<string, unknown> | null;
    }
}
