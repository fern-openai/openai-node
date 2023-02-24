/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { OpenAiApi } from "@fern-api/open-ai";

export interface Engine {
    id: OpenAiApi.EngineId;
    object: string;
    created?: number;
    ready: boolean;
}