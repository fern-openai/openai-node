/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAiApi } from "@fern-api/open-ai";
import * as core from "../../../../core";

export const ModelId: core.serialization.Schema<serializers.ModelId.Raw, OpenAiApi.ModelId> =
    core.serialization.string();

export declare namespace ModelId {
    type Raw = string;
}