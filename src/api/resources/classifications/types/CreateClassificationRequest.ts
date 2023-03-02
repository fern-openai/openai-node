/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CreateClassificationRequest {
    /** ID of the model to use. You can use the [List models](https://platform.openai.com/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](https://platform.openai.com/docs/models/overview) for descriptions of them. */
    model: string;
    /** Query to be classified. */
    query: string;
    /**
     * A list of examples with labels, in the following format: `[["The movie is so interesting.", "Positive"], ["It is quite boring.", "Negative"], ...]` All the label strings will be normalized to be capitalized. You should specify either `examples` or `file`, but not both.
     *
     */
    examples?: string[][];
    /**
     * The ID of the uploaded file that contains training examples. See [upload file](https://platform.openai.com/docs/api-reference/files/upload) for how to upload a file of the desired format and purpose. You should specify either `examples` or `file`, but not both.
     *
     */
    file?: string;
    /** The set of categories being classified. If not specified, candidate labels will be automatically collected from the examples you provide. All the label strings will be normalized to be capitalized. */
    labels?: string[];
    /** ID of the model to use for [Search](https://platform.openai.com/docs/api-reference/searches/create). You can select one of `ada`, `babbage`, `curie`, or `davinci`. */
    searchModel?: string;
    /**
     * What sampling temperature to use, between 0 and 2.
     * Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
     *
     */
    temperature?: number;
    /**
     * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens. For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1` elements in the response. The maximum value for `logprobs` is 5. If you need more than this, please contact us through our [Help center](https://help.openai.com) and describe your use case. When `logprobs` is set, `completion` will be automatically added into `expand` to get the logprobs.
     *
     */
    logprobs?: number;
    /** The maximum number of examples to be ranked by [Search](https://platform.openai.com/docs/api-reference/searches/create) when using `file`. Setting it to a higher value leads to improved accuracy but with increased latency and cost. */
    maxExamples?: number;
    /**
     * Modify the likelihood of specified tokens appearing in the completion. Accepts a json object that maps tokens (specified by their token ID in the GPT tokenizer) to an associated bias value from -100 to 100. You can use this [tokenizer tool](https://platform.openai.com/tokenizer?view=bpe) (which works for both GPT-2 and GPT-3) to convert text to token IDs. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token. As an example, you can pass `{"50256": -100}` to prevent the <|endoftext|> token from being generated.
     *
     */
    logitBias?: Record<string, number | undefined>;
    /** If set to `true`, the returned JSON will include a "prompt" field containing the final prompt that was used to request a completion. This is mainly useful for debugging purposes. */
    returnPrompt?: boolean;
    /**
     * A special boolean flag for showing metadata. If set to `true`, each document entry in the returned JSON will contain a "metadata" field. This flag only takes effect when `file` is set.
     *
     */
    returnMetadata?: boolean;
    /** If an object name is in the list, we provide the full information of the object; otherwise, we only provide the object ID. Currently we support `completion` and `file` objects for expansion. */
    expand?: unknown[];
    /**
     * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](https://platform.openai.com/docs/guides/safety-best-practices/end-user-ids).
     *
     */
    user?: string;
}
