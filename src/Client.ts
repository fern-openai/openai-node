/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Answer } from "./api/resources/answer/client/Client";
import { Audio } from "./api/resources/audio/client/Client";
import { Chat } from "./api/resources/chat/client/Client";
import { Classification } from "./api/resources/classification/client/Client";
import { Completion } from "./api/resources/completion/client/Client";
import { Edit } from "./api/resources/edit/client/Client";
import { Embedding } from "./api/resources/embedding/client/Client";
import { Engine } from "./api/resources/engine/client/Client";
import { File_ } from "./api/resources/file/client/Client";
import { FineTune } from "./api/resources/fineTune/client/Client";
import { Image } from "./api/resources/image/client/Client";
import { Model } from "./api/resources/model/client/Client";
import { Moderation } from "./api/resources/moderation/client/Client";

export declare namespace OpenAIClient {
    interface Options {
        environment?: environments.OpenAIEnvironment | string;
        token: core.Supplier<core.BearerToken>;
        organization?: core.Supplier<string | undefined>;
    }
}

export class OpenAIClient {
    constructor(private readonly options: OpenAIClient.Options) {}

    private _answer: Answer | undefined;

    public get answer(): Answer {
        return (this._answer ??= new Answer(this.options));
    }

    private _audio: Audio | undefined;

    public get audio(): Audio {
        return (this._audio ??= new Audio(this.options));
    }

    private _chat: Chat | undefined;

    public get chat(): Chat {
        return (this._chat ??= new Chat(this.options));
    }

    private _classification: Classification | undefined;

    public get classification(): Classification {
        return (this._classification ??= new Classification(this.options));
    }

    private _completion: Completion | undefined;

    public get completion(): Completion {
        return (this._completion ??= new Completion(this.options));
    }

    private _edit: Edit | undefined;

    public get edit(): Edit {
        return (this._edit ??= new Edit(this.options));
    }

    private _embedding: Embedding | undefined;

    public get embedding(): Embedding {
        return (this._embedding ??= new Embedding(this.options));
    }

    private _engine: Engine | undefined;

    public get engine(): Engine {
        return (this._engine ??= new Engine(this.options));
    }

    private _file: File_ | undefined;

    public get file(): File_ {
        return (this._file ??= new File_(this.options));
    }

    private _fineTune: FineTune | undefined;

    public get fineTune(): FineTune {
        return (this._fineTune ??= new FineTune(this.options));
    }

    private _image: Image | undefined;

    public get image(): Image {
        return (this._image ??= new Image(this.options));
    }

    private _model: Model | undefined;

    public get model(): Model {
        return (this._model ??= new Model(this.options));
    }

    private _moderation: Moderation | undefined;

    public get moderation(): Moderation {
        return (this._moderation ??= new Moderation(this.options));
    }
}
