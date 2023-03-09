![openai image](./static/hero.png)

# OpenAI Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/openai)](https://www.npmjs.com/package/@fern-api/openai)

The OpenAI Node.js library provides access to the OpenAI API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://platform.openai.com/docs/introduction).

## Installation

```
npm install @fern-api/openai
```

```
yarn add @fern-api/openai
```

## Authentication

The OpenAI API uses API keys for authentication. Visit your [API Keys](https://platform.openai.com/account/api-keys) page to retrieve the API key you'll use in your requests.

**Remember that your API key is a secret!** Do not share it with others or expose it in any client-side code (browsers, apps). Production requests must be routed through your own backend server where your API key can be securely loaded from an environment variable or key management service.


## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/fern-openai-typescript-sdk?file=app.ts&view=editor)

```typescript
import { OpenAIClient } from '@fern-api/openai';

const client = new OpenAIClient({
  token: 'YOUR_API_KEY',
});

const response = await client.edit.create({
  model: 'text-davinci-edit-001',
  input: 'What day of the wek is it?',
  instruction: 'Fix the spelling mistakes',
});

console.log(response.choices[0].text); // "What day of the week is it?"
```

## Specifying organization

If you belong to multiple organizations, you can specify an organization when constructing the client.
Usage from these API requests will count against the specified organization's subscription quota.

```typescript
const client = new OpenAIClient({
  token: 'YOUR_API_KEY',
  organization: 'org-dXiZKrWii8lND9WMvqr0UoKy',
});
```

## Handling errors

When the API returns a non-success status code (4xx or 5xx response), a subclass of [OpenAIError](src/errors/OpenAIError.ts) will be thrown:

```typescript
try {
  await client.edit.create({
    model: 'text-davinci-edit-001',
    input: 'What day of the wek is it?',
    instruction: 'Fix the spelling mistakes',
  });
} catch (error) {
  if (err instanceof OpenAIError) {
    console.log(err.statusCode);
    console.log(err.body);
  }
}
```

Error codes are as followed:

| Status Code                                                                       | Cause                                        | Solution |
| --------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| 401 - Invalid Authentication                                                      | Invalid Authentication                       | Ensure the correct [API key](https://platform.openai.com/account/api-keys) and requesting organization are being used. |
| 401 - Incorrect API key provided                                                  | The requesting API key is not correct.       | Ensure the API key used is correct, clear your browser cache, or [generate a new one](https://platform.openai.com/account/api-keys). |
| 401 - You must be a member of an organization to use the API                      | Your account is not part of an organization. | Contact us to get added to a new organization or ask your organization manager to [invite you to an organization](https://platform.openai.com/account/members). |
| 429 - Rate limit reached for requests                                             | You are sending requests too quickly.        | Pace your requests. Read the [Rate limit guide](https://platform.openai.com/docs/guides/rate-limits). |
| 429 - You exceeded your current quota, please check your plan and billing details | You have hit your maximum monthly spend (hard limit) which you can view in the [account billing section](https://platform.openai.com/account/billing/limits). | [Apply for a quota increase](https://platform.openai.com/forms/quota-increase). |
| 429 - The engine is currently overloaded, please try again later                  | Our servers are experiencing high traffic. | Please retry your requests after a brief wait. |
| 500 - The server had an error while processing your request                       | Issue on our servers. | Retry your request after a brief wait and contact us if the issue persists. Check the [status page](https://status.openai.com/). |


## File upload

The SDK supports uploading files using the built-in [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) and [`ReadStream`](https://nodejs.org/api/fs.html#class-fsreadstream) classes.

```typescript
import * as fs from "fs";
import { OpenAIClient } from '@fern-api/openai';

const { Configuration, OpenAIApi } = require("openai");

const client = new OpenAIClient({
  token: 'YOUR_API_KEY',
  organization: 'org-dXiZKrWii8lND9WMvqr0UoKy',
});

const response = await client.file.upload(
  fs.createReadStream("mydata.jsonl"),
  { purpose: "fine-tune" }
);
```

## Streaming

The SDK supports streaming responses from certain endpoints:
  - [Create completion](https://platform.openai.com/docs/api-reference/completions/create)
  - [Create chat completion](https://platform.openai.com/docs/api-reference/chat/create)
  - [List fine tune events](https://platform.openai.com/docs/api-reference/fine-tunes/events)

To take advantage of this feature, pass `stream: true` with your request and a callback to handle the events.

```typescript
await client.chat.createCompletion({
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: "Who won the world series in 2015?" }],
  stream: true, // <---
}, (data) => {
  console.log("Received a new data chunk", data);
});
```

You can specify additional callbacks for handling errors and completion:

```typescript
await client.chat.createCompletion({
  model: "gpt-3.5-turbo",
  messages: [{ role: "user", content: "Who won the world series in 2015?" }],
  stream: true,
}, (data) => {
  console.log("Received a new data chunk", data);
}, {
  onError: (error) => {
    console.log("Received error", error);
  },
  onFinish: () => {
    console.log("Finished!");
  },
});
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-openai/open-ai-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
