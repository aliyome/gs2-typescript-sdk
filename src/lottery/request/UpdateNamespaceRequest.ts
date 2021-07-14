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

import * as Gs2Lottery from '../model'

export class UpdateNamespaceRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private description: string|null = null;
    private queueNamespaceId: string|null = null;
    private keyId: string|null = null;
    private lotteryTriggerScriptId: string|null = null;
    private choicePrizeTableScriptId: string|null = null;
    private logSetting: Gs2Lottery.LogSetting|null = null;

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

    public getLotteryTriggerScriptId(): string|null {
        return this.lotteryTriggerScriptId;
    }

    public setLotteryTriggerScriptId(lotteryTriggerScriptId: string|null) {
        this.lotteryTriggerScriptId = lotteryTriggerScriptId;
        return this;
    }

    public withLotteryTriggerScriptId(lotteryTriggerScriptId: string|null): this {
        this.lotteryTriggerScriptId = lotteryTriggerScriptId;
        return this;
    }

    public getChoicePrizeTableScriptId(): string|null {
        return this.choicePrizeTableScriptId;
    }

    public setChoicePrizeTableScriptId(choicePrizeTableScriptId: string|null) {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    }

    public withChoicePrizeTableScriptId(choicePrizeTableScriptId: string|null): this {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    }

    public getLogSetting(): Gs2Lottery.LogSetting|null {
        return this.logSetting;
    }

    public setLogSetting(logSetting: Gs2Lottery.LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }

    public withLogSetting(logSetting: Gs2Lottery.LogSetting|null): this {
        this.logSetting = logSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateNamespaceRequest {
        return new UpdateNamespaceRequest()
            .withNamespaceName(data["namespaceName"])
            .withDescription(data["description"])
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withLotteryTriggerScriptId(data["lotteryTriggerScriptId"])
            .withChoicePrizeTableScriptId(data["choicePrizeTableScriptId"])
            .withLogSetting(Gs2Lottery.LogSetting.fromDict(data["logSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "description": this.getDescription(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "lotteryTriggerScriptId": this.getLotteryTriggerScriptId(),
            "choicePrizeTableScriptId": this.getChoicePrizeTableScriptId(),
            "logSetting": this.getLogSetting()?.toDict(),
        };
    }
}