/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IRequest from '@/gs2/core/interface/IRequest';

import * as Gs2Datastore from '../model'

export class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private logSetting: Gs2Datastore.LogSetting|null = null;
    private doneUploadScript: Gs2Datastore.ScriptSetting|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }

    public getName(): string|null {
        return this.name;
    }

    public setName(name: string|null) {
        this.name = name;
        return this;
    }

    public withName(name: string|null): this {
        this.name = name;
        return this;
    }

    public getDescription(): string|null {
        return this.description;
    }

    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }

    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }

    public getLogSetting(): Gs2Datastore.LogSetting|null {
        return this.logSetting;
    }

    public setLogSetting(logSetting: Gs2Datastore.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }

    public withLogSetting(logSetting: Gs2Datastore.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public getDoneUploadScript(): Gs2Datastore.ScriptSetting|null {
        return this.doneUploadScript;
    }

    public setDoneUploadScript(doneUploadScript: Gs2Datastore.ScriptSetting|null) {
        this.doneUploadScript = doneUploadScript;
        return this;
    }

    public withDoneUploadScript(doneUploadScript: Gs2Datastore.ScriptSetting|null): this {
        this.doneUploadScript = doneUploadScript;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withLogSetting(Gs2Datastore.LogSetting.fromDict(data["logSetting"]))
            .withDoneUploadScript(Gs2Datastore.ScriptSetting.fromDict(data["doneUploadScript"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "logSetting": this.getLogSetting()?.toDict(),
            "doneUploadScript": this.getDoneUploadScript()?.toDict(),
        };
    }
}