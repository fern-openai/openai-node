/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { OpenAI } from "@fern-api/openai";
import * as core from "../../../../../core";

export const CreateFineTuneRequest: core.serialization.Schema<
    serializers.CreateFineTuneRequest.Raw,
    OpenAI.CreateFineTuneRequest
> = core.serialization.object({
    trainingFile: core.serialization.property("training_file", core.serialization.string()),
    validationFile: core.serialization.property("validation_file", core.serialization.string().optional()),
    model: core.serialization.string().optional(),
    nEpochs: core.serialization.property("n_epochs", core.serialization.number().optional()),
    batchSize: core.serialization.property("batch_size", core.serialization.number().optional()),
    learningRateMultiplier: core.serialization.property(
        "learning_rate_multiplier",
        core.serialization.number().optional()
    ),
    promptLossWeight: core.serialization.property("prompt_loss_weight", core.serialization.number().optional()),
    computeClassificationMetrics: core.serialization.property(
        "compute_classification_metrics",
        core.serialization.boolean().optional()
    ),
    classificationNClasses: core.serialization.property(
        "classification_n_classes",
        core.serialization.number().optional()
    ),
    classificationPositiveClass: core.serialization.property(
        "classification_positive_class",
        core.serialization.string().optional()
    ),
    classificationBetas: core.serialization.property(
        "classification_betas",
        core.serialization.list(core.serialization.number()).optional()
    ),
    suffix: core.serialization.string().optional(),
});

export declare namespace CreateFineTuneRequest {
    interface Raw {
        training_file: string;
        validation_file?: string | null;
        model?: string | null;
        n_epochs?: number | null;
        batch_size?: number | null;
        learning_rate_multiplier?: number | null;
        prompt_loss_weight?: number | null;
        compute_classification_metrics?: boolean | null;
        classification_n_classes?: number | null;
        classification_positive_class?: string | null;
        classification_betas?: number[] | null;
        suffix?: string | null;
    }
}
