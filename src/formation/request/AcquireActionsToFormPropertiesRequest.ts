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

import * as Gs2Formation from '../model'

export class AcquireActionsToFormPropertiesRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private moldName: string|null = null;
    private index: number|null = null;
    private acquireAction: Gs2Formation.AcquireAction|null = null;
    private queueNamespaceId: string|null = null;
    private keyId: string|null = null;
    private config: Gs2Formation.AcquireActionConfig[]|null = null;

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

    public getNamespaceName(): string|null {
        return this.namespaceName;
    }

    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }

    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }

    public getUserId(): string|null {
        return this.userId;
    }

    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }

    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }

    public getMoldName(): string|null {
        return this.moldName;
    }

    public setMoldName(moldName: string|null) {
        this.moldName = moldName;
        return this;
    }

    public withMoldName(moldName: string|null): this {
        this.moldName = moldName;
        return this;
    }

    public getIndex(): number|null {
        return this.index;
    }

    public setIndex(index: number|null) {
        this.index = index;
        return this;
    }

    public withIndex(index: number|null): this {
        this.index = index;
        return this;
    }

    public getAcquireAction(): Gs2Formation.AcquireAction|null {
        return this.acquireAction;
    }

    public setAcquireAction(acquireAction: Gs2Formation.AcquireAction|null) {
        this.acquireAction = acquireAction;
        return this;
    }

    public withAcquireAction(acquireAction: Gs2Formation.AcquireAction|null): this {
        this.acquireAction = acquireAction;
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

    public getConfig(): Gs2Formation.AcquireActionConfig[]|null {
        return this.config;
    }

    public setConfig(config: Gs2Formation.AcquireActionConfig[]|null) {
        this.config = config;
        return this;
    }

    public withConfig(config: Gs2Formation.AcquireActionConfig[]|null): this {
        this.config = config;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AcquireActionsToFormPropertiesRequest {
        return new AcquireActionsToFormPropertiesRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldName(data["moldName"])
            .withIndex(data["index"])
            .withAcquireAction(Gs2Formation.AcquireAction.fromDict(data["acquireAction"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withConfig(data.config ?
                data.config.map((item: {[key: string]: any}) => {
                    return Gs2Formation.AcquireActionConfig.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldName": this.getMoldName(),
            "index": this.getIndex(),
            "acquireAction": this.getAcquireAction()?.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "config": this.getConfig() ?
                this.getConfig()!.map((item: Gs2Formation.AcquireActionConfig) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}