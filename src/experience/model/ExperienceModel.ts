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
import { Threshold } from './Threshold';

export class ExperienceModel implements IModel {
    private experienceModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private defaultExperience: number|null = null;
    private defaultRankCap: number|null = null;
    private maxRankCap: number|null = null;
    private rankThreshold: Threshold|null = null;

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

    public getRankThreshold(): Threshold|null {
        return this.rankThreshold;
    }

    public setRankThreshold(rankThreshold: Threshold|null) {
        this.rankThreshold = rankThreshold;
        return this;
    }

    public withRankThreshold(rankThreshold: Threshold|null): this {
        this.rankThreshold = rankThreshold;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExperienceModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceModel()
            .withExperienceModelId(data["experienceModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDefaultExperience(data["defaultExperience"])
            .withDefaultRankCap(data["defaultRankCap"])
            .withMaxRankCap(data["maxRankCap"])
            .withRankThreshold(Threshold.fromDict(data["rankThreshold"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "experienceModelId": this.getExperienceModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "defaultExperience": this.getDefaultExperience(),
            "defaultRankCap": this.getDefaultRankCap(),
            "maxRankCap": this.getMaxRankCap(),
            "rankThreshold": this.getRankThreshold()?.toDict(),
        };
    }
}
