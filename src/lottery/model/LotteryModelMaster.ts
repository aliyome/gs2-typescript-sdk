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

import IModel from '@/gs2/core/interface/IModel';

export class LotteryModelMaster implements IModel {
    private lotteryModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private description: string|null = null;
    private mode: string|null = null;
    private method: string|null = null;
    private prizeTableName: string|null = null;
    private choicePrizeTableScriptId: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getLotteryModelId(): string|null {
        return this.lotteryModelId;
    }

    public setLotteryModelId(lotteryModelId: string|null) {
        this.lotteryModelId = lotteryModelId;
        return this;
    }

    public withLotteryModelId(lotteryModelId: string|null): this {
        this.lotteryModelId = lotteryModelId;
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

    public getMetadata(): string|null {
        return this.metadata;
    }

    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }

    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
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

    public getMode(): string|null {
        return this.mode;
    }

    public setMode(mode: string|null) {
        this.mode = mode;
        return this;
    }

    public withMode(mode: string|null): this {
        this.mode = mode;
        return this;
    }

    public getMethod(): string|null {
        return this.method;
    }

    public setMethod(method: string|null) {
        this.method = method;
        return this;
    }

    public withMethod(method: string|null): this {
        this.method = method;
        return this;
    }

    public getPrizeTableName(): string|null {
        return this.prizeTableName;
    }

    public setPrizeTableName(prizeTableName: string|null) {
        this.prizeTableName = prizeTableName;
        return this;
    }

    public withPrizeTableName(prizeTableName: string|null): this {
        this.prizeTableName = prizeTableName;
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

    public getCreatedAt(): number|null {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }

    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }

    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }

    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LotteryModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryModelMaster()
            .withLotteryModelId(data["lotteryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withMode(data["mode"])
            .withMethod(data["method"])
            .withPrizeTableName(data["prizeTableName"])
            .withChoicePrizeTableScriptId(data["choicePrizeTableScriptId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "lotteryModelId": this.getLotteryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "mode": this.getMode(),
            "method": this.getMethod(),
            "prizeTableName": this.getPrizeTableName(),
            "choicePrizeTableScriptId": this.getChoicePrizeTableScriptId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
