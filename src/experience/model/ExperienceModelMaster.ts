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

export class ExperienceModelMaster implements IModel {
    private experienceModelId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private defaultExperience: number|null = null;
    private defaultRankCap: number|null = null;
    private maxRankCap: number|null = null;
    private rankThresholdName: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getExperienceModelId(): string|null {
        return this.experienceModelId;
    }

    public setExperienceModelId(experienceModelId: string|null) {
        this.experienceModelId = experienceModelId;
        return this;
    }

    public withExperienceModelId(experienceModelId: string|null): this {
        this.experienceModelId = experienceModelId;
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

    public getDefaultExperience(): number|null {
        return this.defaultExperience;
    }

    public setDefaultExperience(defaultExperience: number|null) {
        this.defaultExperience = defaultExperience;
        return this;
    }

    public withDefaultExperience(defaultExperience: number|null): this {
        this.defaultExperience = defaultExperience;
        return this;
    }

    public getDefaultRankCap(): number|null {
        return this.defaultRankCap;
    }

    public setDefaultRankCap(defaultRankCap: number|null) {
        this.defaultRankCap = defaultRankCap;
        return this;
    }

    public withDefaultRankCap(defaultRankCap: number|null): this {
        this.defaultRankCap = defaultRankCap;
        return this;
    }

    public getMaxRankCap(): number|null {
        return this.maxRankCap;
    }

    public setMaxRankCap(maxRankCap: number|null) {
        this.maxRankCap = maxRankCap;
        return this;
    }

    public withMaxRankCap(maxRankCap: number|null): this {
        this.maxRankCap = maxRankCap;
        return this;
    }

    public getRankThresholdName(): string|null {
        return this.rankThresholdName;
    }

    public setRankThresholdName(rankThresholdName: string|null) {
        this.rankThresholdName = rankThresholdName;
        return this;
    }

    public withRankThresholdName(rankThresholdName: string|null): this {
        this.rankThresholdName = rankThresholdName;
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

    public static fromDict(data: {[key: string]: any}): ExperienceModelMaster|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceModelMaster()
            .withExperienceModelId(data["experienceModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withDefaultExperience(data["defaultExperience"])
            .withDefaultRankCap(data["defaultRankCap"])
            .withMaxRankCap(data["maxRankCap"])
            .withRankThresholdName(data["rankThresholdName"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "experienceModelId": this.getExperienceModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "defaultExperience": this.getDefaultExperience(),
            "defaultRankCap": this.getDefaultRankCap(),
            "maxRankCap": this.getMaxRankCap(),
            "rankThresholdName": this.getRankThresholdName(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
