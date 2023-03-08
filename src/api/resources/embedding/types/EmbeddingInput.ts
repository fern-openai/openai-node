/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Input text to get embeddings for, encoded as a string or array of tokens. To get embeddings for multiple inputs in a single request, pass an array of strings or array of token arrays. Each input must not exceed 8192 tokens in length.
 *
 */
export type EmbeddingInput = string | string[] | number[] | number[][];
