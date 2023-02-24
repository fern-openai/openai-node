/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAiApi } from "@fern-api/open-ai";
import * as core from "../../../../core";

export const FileId: core.serialization.Schema<serializers.FileId.Raw, OpenAiApi.FileId> = core.serialization.string();

export declare namespace FileId {
    type Raw = string;
}
