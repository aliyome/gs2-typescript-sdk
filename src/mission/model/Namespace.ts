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
import { NotificationSetting } from './NotificationSetting';
import { LogSetting } from './LogSetting';

export class Namespace implements IModel {
    private namespaceId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private missionCompleteScript: ScriptSetting|null = null;
    private counterIncrementScript: ScriptSetting|null = null;
    private receiveRewardsScript: ScriptSetting|null = null;
    private queueNamespaceId: string|null = null;
    private keyId: string|null = null;
    private completeNotification: NotificationSetting|null = null;
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

    public getMissionCompleteScript(): ScriptSetting|null {
        return this.missionCompleteScript;
    }

    public setMissionCompleteScript(missionCompleteScript: ScriptSetting|null) {
        this.missionCompleteScript = missionCompleteScript;
        return this;
    }

    public withMissionCompleteScript(missionCompleteScript: ScriptSetting|null): this {
        this.missionCompleteScript = missionCompleteScript;
        return this;
    }

    public getCounterIncrementScript(): ScriptSetting|null {
        return this.counterIncrementScript;
    }

    public setCounterIncrementScript(counterIncrementScript: ScriptSetting|null) {
        this.counterIncrementScript = counterIncrementScript;
        return this;
    }

    public withCounterIncrementScript(counterIncrementScript: ScriptSetting|null): this {
        this.counterIncrementScript = counterIncrementScript;
        return this;
    }

    public getReceiveRewardsScript(): ScriptSetting|null {
        return this.receiveRewardsScript;
    }

    public setReceiveRewardsScript(receiveRewardsScript: ScriptSetting|null) {
        this.receiveRewardsScript = receiveRewardsScript;
        return this;
    }

    public withReceiveRewardsScript(receiveRewardsScript: ScriptSetting|null): this {
        this.receiveRewardsScript = receiveRewardsScript;
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

    public getCompleteNotification(): NotificationSetting|null {
        return this.completeNotification;
    }

    public setCompleteNotification(completeNotification: NotificationSetting|null) {
        this.completeNotification = completeNotification;
        return this;
    }

    public withCompleteNotification(completeNotification: NotificationSetting|null): this {
        this.completeNotification = completeNotification;
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
            .withMissionCompleteScript(ScriptSetting.fromDict(data["missionCompleteScript"]))
            .withCounterIncrementScript(ScriptSetting.fromDict(data["counterIncrementScript"]))
            .withReceiveRewardsScript(ScriptSetting.fromDict(data["receiveRewardsScript"]))
            .withQueueNamespaceId(data["queueNamespaceId"])
            .withKeyId(data["keyId"])
            .withCompleteNotification(NotificationSetting.fromDict(data["completeNotification"]))
            .withLogSetting(LogSetting.fromDict(data["logSetting"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceId": this.getNamespaceId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "missionCompleteScript": this.getMissionCompleteScript()?.toDict(),
            "counterIncrementScript": this.getCounterIncrementScript()?.toDict(),
            "receiveRewardsScript": this.getReceiveRewardsScript()?.toDict(),
            "queueNamespaceId": this.getQueueNamespaceId(),
            "keyId": this.getKeyId(),
            "completeNotification": this.getCompleteNotification()?.toDict(),
            "logSetting": this.getLogSetting()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
