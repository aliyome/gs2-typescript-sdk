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

import * as Gs2Exchange from '../model'

export class CreateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private enableAwaitExchange: boolean|null = null;
    private enableDirectExchange: boolean|null = null;
    private queueNamespaceId: string|null = null;
    private keyId: string|null = null;
    private logSetting: Gs2Exchange.LogSetting|null = null;

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

    public getEnableAwaitExchange(): boolean|null {
        return this.enableAwaitExchange;
    }

    public setEnableAwaitExchange(enableAwaitExchange: boolean|null) {
        this.enableAwaitExchange = enableAwaitExchange;
        return this;
    }

    public withEnableAwaitExchange(enableAwaitExchange: boolean|null): this {
        this.enableAwaitExchange = enableAwaitExchange;
        return this;
    }

    public getEnableDirectExchange(): boolean|null {
        return this.enableDirectExchange;
    }

    public setEnableDirectExchange(enableDirectExchange: boolean|null) {
        this.enableDirectExchange = enableDirectExchange;
        return this;
    }

    public withEnableDirectExchange(enableDirectExchange: boolean|null): this {
        this.enableDirectExchange = enableDirectExchange;
        return this;
    }

    public getQueueNamespaceId(): string|null {
        return this.queueNamespaceId;
    }

    public setQueueNamespaceId(queueNamespaceId: string|null) {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }

    public withQueueNamespaceId(queueNamespaceId: string|null): this {
        this.queueNamespaceId = queueNamespaceId;
        return this;
    }

    public getKeyId(): string|null {
        return this.keyId;
    }

    public setKeyId(keyId: string|null) {
        this.keyId = keyId;
        return this;
    }

    public withKeyId(keyId: string|null): this {
        this.keyId = keyId;
        return this;
    }

    public getLogSetting(): Gs2Exchange.LogSetting|null {
        return this.logSetting;
    }

    public setLogSetting(logSetting: Gs2Exchange.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }

    public withLogSetting(logSetting: Gs2Exchange.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateNamespaceRequest {
        return new CreateNamespaceRequest()
            .withName(data["name"])
            .withDescription(data["description"])
            .withEnableAwaitExchange(data["enableAwaitExchange"])
            .withEnableDirectExchange(data["enableDirectExchange"])
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withLogSetting(Gs2Exchange.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "description": this.getDescription(),
            "enableAwaitExchange": this.getEnableAwaitExchange(),
            "enableDirectExchange": this.getEnableDirectExchange(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}