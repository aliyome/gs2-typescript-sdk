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
import { Reward } from './Reward';

export class Progress implements IModel {
    private progressId: string|null = null;
    private userId: string|null = null;
    private transactionId: string|null = null;
    private questModelId: string|null = null;
    private randomSeed: number|null = null;
    private rewards: Reward[]|null = null;
    private metadata: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getProgressId(): string|null {
        return this.progressId;
    }

    public setProgressId(progressId: string|null) {
        this.progressId = progressId;
        return this;
    }

    public withProgressId(progressId: string|null): this {
        this.progressId = progressId;
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

    public getTransactionId(): string|null {
        return this.transactionId;
    }

    public setTransactionId(transactionId: string|null) {
        this.transactionId = transactionId;
        return this;
    }

    public withTransactionId(transactionId: string|null): this {
        this.transactionId = transactionId;
        return this;
    }

    public getQuestModelId(): string|null {
        return this.questModelId;
    }

    public setQuestModelId(questModelId: string|null) {
        this.questModelId = questModelId;
        return this;
    }

    public withQuestModelId(questModelId: string|null): this {
        this.questModelId = questModelId;
        return this;
    }

    public getRandomSeed(): number|null {
        return this.randomSeed;
    }

    public setRandomSeed(randomSeed: number|null) {
        this.randomSeed = randomSeed;
        return this;
    }

    public withRandomSeed(randomSeed: number|null): this {
        this.randomSeed = randomSeed;
        return this;
    }

    public getRewards(): Reward[]|null {
        return this.rewards;
    }

    public setRewards(rewards: Reward[]|null) {
        this.rewards = rewards;
        return this;
    }

    public withRewards(rewards: Reward[]|null): this {
        this.rewards = rewards;
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

    public static fromDict(data: {[key: string]: any}): Progress|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Progress()
            .withProgressId(data["progressId"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"])
            .withQuestModelId(data["questModelId"])
            .withRandomSeed(data["randomSeed"])
            .withRewards(data.rewards ?
                data.rewards.map((item: {[key: string]: any}) => {
                    return Reward.fromDict(item);
                }
            ) : [])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "progressId": this.getProgressId(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
            "questModelId": this.getQuestModelId(),
            "randomSeed": this.getRandomSeed(),
            "rewards": this.getRewards() ?
                this.getRewards()!.map((item: Reward) => {
                    return item.toDict();
                }
            ) : [],
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
