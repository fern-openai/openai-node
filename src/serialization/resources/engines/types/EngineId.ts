/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAiApi } from "@fern-api/open-ai";
import * as core from "../../../../core";

export const EngineId: core.serialization.Schema<serializers.EngineId.Raw, OpenAiApi.EngineId> =
    core.serialization.string();

export declare namespace EngineId {
    type Raw = string;
}