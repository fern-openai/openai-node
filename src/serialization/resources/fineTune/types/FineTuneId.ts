/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const FineTuneId: core.serialization.Schema<serializers.FineTuneId.Raw, OpenAI.FineTuneId> =
    core.serialization.string();

export declare namespace FineTuneId {
    type Raw = string;
}
