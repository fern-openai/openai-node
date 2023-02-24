/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { OpenAiApi } from "@fern-api/open-ai";

export interface ModerationResults {
    flagged: boolean;
    categories: OpenAiApi.Categories;
    categoryScores: OpenAiApi.CategoryScores;
}