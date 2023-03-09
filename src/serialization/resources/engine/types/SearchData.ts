/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const SearchData: core.serialization.ObjectSchema<serializers.SearchData.Raw, OpenAI.SearchData> =
    core.serialization.object({
        object: core.serialization.string().optional(),
        document: core.serialization.number().optional(),
        score: core.serialization.number().optional(),
    });

export declare namespace SearchData {
    interface Raw {
        object?: string | null;
        document?: number | null;
        score?: number | null;
    }
}