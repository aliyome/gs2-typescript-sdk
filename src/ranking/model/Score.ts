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

export class Score implements IModel {
    private scoreId: string|null = null;
    private categoryName: string|null = null;
    private userId: string|null = null;
    private uniqueId: string|null = null;
    private scorerUserId: string|null = null;
    private score: number|null = null;
    private metadata: string|null = null;
    private createdAt: number|null = null;

    public getScoreId(): string|null {
        return this.scoreId;
    }

    public setScoreId(scoreId: string|null) {
        this.scoreId = scoreId;
        return this;
    }

    public withScoreId(scoreId: string|null): this {
        this.scoreId = scoreId;
        return this;
    }

    public getCategoryName(): string|null {
        return this.categoryName;
    }

    public setCategoryName(categoryName: string|null) {
        this.categoryName = categoryName;
        return this;
    }

    public withCategoryName(categoryName: string|null): this {
        this.categoryName = categoryName;
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

    public getUniqueId(): string|null {
        return this.uniqueId;
    }

    public setUniqueId(uniqueId: string|null) {
        this.uniqueId = uniqueId;
        return this;
    }

    public withUniqueId(uniqueId: string|null): this {
        this.uniqueId = uniqueId;
        return this;
    }

    public getScorerUserId(): string|null {
        return this.scorerUserId;
    }

    public setScorerUserId(scorerUserId: string|null) {
        this.scorerUserId = scorerUserId;
        return this;
    }

    public withScorerUserId(scorerUserId: string|null): this {
        this.scorerUserId = scorerUserId;
        return this;
    }

    public getScore(): number|null {
        return this.score;
    }

    public setScore(score: number|null) {
        this.score = score;
        return this;
    }

    public withScore(score: number|null): this {
        this.score = score;
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

    public static fromDict(data: {[key: string]: any}): Score|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Score()
            .withScoreId(data["scoreId"])
            .withCategoryName(data["categoryName"])
            .withUserId(data["userId"])
            .withUniqueId(data["uniqueId"])
            .withScorerUserId(data["scorerUserId"])
            .withScore(data["score"])
            .withMetadata(data["metadata"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "scoreId": this.getScoreId(),
            "categoryName": this.getCategoryName(),
            "userId": this.getUserId(),
            "uniqueId": this.getUniqueId(),
            "scorerUserId": this.getScorerUserId(),
            "score": this.getScore(),
            "metadata": this.getMetadata(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
