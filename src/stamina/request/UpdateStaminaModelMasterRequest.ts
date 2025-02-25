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

import * as Gs2Stamina from '../model'

export class UpdateStaminaModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private staminaName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private recoverIntervalMinutes: number|null = null;
    private recoverValue: number|null = null;
    private initialCapacity: number|null = null;
    private isOverflow: boolean|null = null;
    private maxCapacity: number|null = null;
    private maxStaminaTableName: string|null = null;
    private recoverIntervalTableName: string|null = null;
    private recoverValueTableName: string|null = null;

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

    public getStaminaName(): string|null {
        return this.staminaName;
    }

    public setStaminaName(staminaName: string|null) {
        this.staminaName = staminaName;
        return this;
    }

    public withStaminaName(staminaName: string|null): this {
        this.staminaName = staminaName;
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

    public getRecoverIntervalMinutes(): number|null {
        return this.recoverIntervalMinutes;
    }

    public setRecoverIntervalMinutes(recoverIntervalMinutes: number|null) {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    }

    public withRecoverIntervalMinutes(recoverIntervalMinutes: number|null): this {
        this.recoverIntervalMinutes = recoverIntervalMinutes;
        return this;
    }

    public getRecoverValue(): number|null {
        return this.recoverValue;
    }

    public setRecoverValue(recoverValue: number|null) {
        this.recoverValue = recoverValue;
        return this;
    }

    public withRecoverValue(recoverValue: number|null): this {
        this.recoverValue = recoverValue;
        return this;
    }

    public getInitialCapacity(): number|null {
        return this.initialCapacity;
    }

    public setInitialCapacity(initialCapacity: number|null) {
        this.initialCapacity = initialCapacity;
        return this;
    }

    public withInitialCapacity(initialCapacity: number|null): this {
        this.initialCapacity = initialCapacity;
        return this;
    }

    public getIsOverflow(): boolean|null {
        return this.isOverflow;
    }

    public setIsOverflow(isOverflow: boolean|null) {
        this.isOverflow = isOverflow;
        return this;
    }

    public withIsOverflow(isOverflow: boolean|null): this {
        this.isOverflow = isOverflow;
        return this;
    }

    public getMaxCapacity(): number|null {
        return this.maxCapacity;
    }

    public setMaxCapacity(maxCapacity: number|null) {
        this.maxCapacity = maxCapacity;
        return this;
    }

    public withMaxCapacity(maxCapacity: number|null): this {
        this.maxCapacity = maxCapacity;
        return this;
    }

    public getMaxStaminaTableName(): string|null {
        return this.maxStaminaTableName;
    }

    public setMaxStaminaTableName(maxStaminaTableName: string|null) {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    }

    public withMaxStaminaTableName(maxStaminaTableName: string|null): this {
        this.maxStaminaTableName = maxStaminaTableName;
        return this;
    }

    public getRecoverIntervalTableName(): string|null {
        return this.recoverIntervalTableName;
    }

    public setRecoverIntervalTableName(recoverIntervalTableName: string|null) {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    }

    public withRecoverIntervalTableName(recoverIntervalTableName: string|null): this {
        this.recoverIntervalTableName = recoverIntervalTableName;
        return this;
    }

    public getRecoverValueTableName(): string|null {
        return this.recoverValueTableName;
    }

    public setRecoverValueTableName(recoverValueTableName: string|null) {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    }

    public withRecoverValueTableName(recoverValueTableName: string|null): this {
        this.recoverValueTableName = recoverValueTableName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateStaminaModelMasterRequest {
        return new UpdateStaminaModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withStaminaName(data["staminaName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withRecoverIntervalMinutes(data["recoverIntervalMinutes"])
            .withRecoverValue(data["recoverValue"])
            .withInitialCapacity(data["initialCapacity"])
            .withIsOverflow(data["isOverflow"])
            .withMaxCapacity(data["maxCapacity"])
            .withMaxStaminaTableName(data["maxStaminaTableName"])
            .withRecoverIntervalTableName(data["recoverIntervalTableName"])
            .withRecoverValueTableName(data["recoverValueTableName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "staminaName": this.getStaminaName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "recoverIntervalMinutes": this.getRecoverIntervalMinutes(),
            "recoverValue": this.getRecoverValue(),
            "initialCapacity": this.getInitialCapacity(),
            "isOverflow": this.getIsOverflow(),
            "maxCapacity": this.getMaxCapacity(),
            "maxStaminaTableName": this.getMaxStaminaTableName(),
            "recoverIntervalTableName": this.getRecoverIntervalTableName(),
            "recoverValueTableName": this.getRecoverValueTableName(),
        };
    }
}