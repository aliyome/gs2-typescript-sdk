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
    private assumeUserId: string|null = null;
    private acceptVersionScript: ScriptSetting|null = null;
    private checkVersionTriggerScriptId: string|null = null;
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

    public getAssumeUserId(): string|null {
        return this.assumeUserId;
    }

    public setAssumeUserId(assumeUserId: string|null) {
        this.assumeUserId = assumeUserId;
        return this;
    }

    public withAssumeUserId(assumeUserId: string|null): this {
        this.assumeUserId = assumeUserId;
        return this;
    }

    public getAcceptVersionScript(): ScriptSetting|null {
        return this.acceptVersionScript;
    }

    public setAcceptVersionScript(acceptVersionScript: ScriptSetting|null) {
        this.acceptVersionScript = acceptVersionScript;
        return this;
    }

    public withAcceptVersionScript(acceptVersionScript: ScriptSetting|null): this {
        this.acceptVersionScript = acceptVersionScript;
        return this;
    }

    public getCheckVersionTriggerScriptId(): string|null {
        return this.checkVersionTriggerScriptId;
    }

    public setCheckVersionTriggerScriptId(checkVersionTriggerScriptId: string|null) {
        this.checkVersionTriggerScriptId = checkVersionTriggerScriptId;
        return this;
    }

    public withCheckVersionTriggerScriptId(checkVersionTriggerScriptId: string|null): this {
        this.checkVersionTriggerScriptId = checkVersionTriggerScriptId;
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
            .withAssumeUserId(data["assumeUserId"])
            .withAcceptVersionScript(ScriptSetting.fromDict(data["acceptVersionScript"]))
            .withCheckVersionTriggerScriptId(data["checkVersionTriggerScriptId"])
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "assumeUserId": this.getAssumeUserId(),
            "acceptVersionScript": this.getAcceptVersionScript()?.toDict(),
            "checkVersionTriggerScriptId": this.getCheckVersionTriggerScriptId(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
