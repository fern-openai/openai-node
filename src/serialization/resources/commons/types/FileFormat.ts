/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../core";

export const FileFormat: core.serialization.Schema<serializers.FileFormat.Raw, OpenAI.FileFormat> =
    core.serialization.enum_(["json", "text", "srt", "verbose_json", "vtt"]);

export declare namespace FileFormat {
    type Raw = "json" | "text" | "srt" | "verbose_json" | "vtt";
}