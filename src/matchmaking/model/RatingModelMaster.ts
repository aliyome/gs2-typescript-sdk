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

export class RatingModelMaster implements IModel {
    private ratingModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private description: string|null = null;
    private volatility: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getRatingModelId(): string|null {
        return this.ratingModelId;
    }

    public setRatingModelId(ratingModelId: string|null) {
        this.ratingModelId = ratingModelId;
        return this;
    }

    public withRatingModelId(ratingModelId: string|null): this {
        this.ratingModelId = ratingModelId;
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

    public getVolatility(): number|null {
        return this.volatility;
    }

    public setVolatility(volatility: number|null) {
        this.volatility = volatility;
        return this;
    }

    public withVolatility(volatility: number|null): this {
        this.volatility = volatility;
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

    public static fromDict(data: {[key: string]: any}): RatingModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new RatingModelMaster()
            .withRatingModelId(data["ratingModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withVolatility(data["volatility"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "ratingModelId": this.getRatingModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "volatility": this.getVolatility(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
