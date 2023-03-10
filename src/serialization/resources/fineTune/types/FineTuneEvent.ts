/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const FineTuneEvent: core.serialization.ObjectSchema<serializers.FineTuneEvent.Raw, OpenAI.FineTuneEvent> =
    core.serialization.object({
        object: core.serialization.string(),
        createdAt: core.serialization.property("created_at", core.serialization.number()),
        level: core.serialization.string(),
        message: core.serialization.string(),
    });

export declare namespace FineTuneEvent {
    interface Raw {
        object: string;
        created_at: number;
        level: string;
        message: string;
    }
}
