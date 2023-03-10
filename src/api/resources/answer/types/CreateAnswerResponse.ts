/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { OpenAI } from "@fern-api/openai";

export interface CreateAnswerResponse {
    object?: string;
    model?: string;
    searchModel?: string;
    completion?: string;
    answers?: string[];
    selectedDocuments?: OpenAI.SelectedDocument[];
}
