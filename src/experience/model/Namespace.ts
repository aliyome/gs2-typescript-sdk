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
import { ScriptSetting } from './ScriptSetting';
import { LogSetting } from './LogSetting';

export class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private experienceCapScriptId: string|null = null;
    private changeExperienceScript: ScriptSetting|null = null;
    private changeRankScript: ScriptSetting|null = null;
    private changeRankCapScript: ScriptSetting|null = null;
    private overflowExperienceScript: ScriptSetting|null = null;
    private logSetting: LogSetting|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getNamespaceId(): string|null {
        return this.namespaceId;
    }

    public setNamespaceId(namespaceId: string|null) {
        this.namespaceId = namespaceId;
        return this;
    }

    public withNamespaceId(namespaceId: string|null): this {
        this.namespaceId = namespaceId;
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

    public getExperienceCapScriptId(): string|null {
        return this.experienceCapScriptId;
    }

    public setExperienceCapScriptId(experienceCapScriptId: string|null) {
        this.experienceCapScriptId = experienceCapScriptId;
        return this;
    }

    public withExperienceCapScriptId(experienceCapScriptId: string|null): this {
        this.experienceCapScriptId = experienceCapScriptId;
        return this;
    }

    public getChangeExperienceScript(): ScriptSetting|null {
        return this.changeExperienceScript;
    }

    public setChangeExperienceScript(changeExperienceScript: ScriptSetting|null) {
        this.changeExperienceScript = changeExperienceScript;
        return this;
    }

    public withChangeExperienceScript(changeExperienceScript: ScriptSetting|null): this {
        this.changeExperienceScript = changeExperienceScript;
        return this;
    }

    public getChangeRankScript(): ScriptSetting|null {
        return this.changeRankScript;
    }

    public setChangeRankScript(changeRankScript: ScriptSetting|null) {
        this.changeRankScript = changeRankScript;
        return this;
    }

    public withChangeRankScript(changeRankScript: ScriptSetting|null): this {
        this.changeRankScript = changeRankScript;
        return this;
    }

    public getChangeRankCapScript(): ScriptSetting|null {
        return this.changeRankCapScript;
    }

    public setChangeRankCapScript(changeRankCapScript: ScriptSetting|null) {
        this.changeRankCapScript = changeRankCapScript;
        return this;
    }

    public withChangeRankCapScript(changeRankCapScript: ScriptSetting|null): this {
        this.changeRankCapScript = changeRankCapScript;
        return this;
    }

    public getOverflowExperienceScript(): ScriptSetting|null {
        return this.overflowExperienceScript;
    }

    public setOverflowExperienceScript(overflowExperienceScript: ScriptSetting|null) {
        this.overflowExperienceScript = overflowExperienceScript;
        return this;
    }

    public withOverflowExperienceScript(overflowExperienceScript: ScriptSetting|null): this {
        this.overflowExperienceScript = overflowExperienceScript;
        return this;
    }

    public getLogSetting(): LogSetting|null {
        return this.logSetting;
    }

    public setLogSetting(logSetting: LogSetting|null) {
        this.logSetting = logSetting;
        return this;
    }

    public withLogSetting(logSetting: LogSetting|null): this {
        this.logSetting = logSetting;
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

    public static fromDict(data: {[key: string]: any}): Namespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Namespace()
            .withNamespaceId(data["namespaceId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withExperienceCapScriptId(data["experienceCapScriptId"])
            .withChangeExperienceScript(ScriptSetting.fromDict(data["changeExperienceScript"]))
            .withChangeRankScript(ScriptSetting.fromDict(data["changeRankScript"]))
            .withChangeRankCapScript(ScriptSetting.fromDict(data["changeRankCapScript"]))
            .withOverflowExperienceScript(ScriptSetting.fromDict(data["overflowExperienceScript"]))
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "experienceCapScriptId": this.getExperienceCapScriptId(),
            "changeExperienceScript": this.getChangeExperienceScript()?.toDict(),
            "changeRankScript": this.getChangeRankScript()?.toDict(),
            "changeRankCapScript": this.getChangeRankCapScript()?.toDict(),
            "overflowExperienceScript": this.getOverflowExperienceScript()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
