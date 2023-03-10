/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const Model: core.serialization.ObjectSchema<serializers.Model.Raw, OpenAI.Model> = core.serialization.object({
    id: core.serialization.string(),
    object: core.serialization.string(),
    created: core.serialization.number(),
    ownedBy: core.serialization.property("owned_by", core.serialization.string()),
});

export declare namespace Model {
    interface Raw {
        id: string;
        object: string;
        created: number;
        owned_by: string;
    }
}
