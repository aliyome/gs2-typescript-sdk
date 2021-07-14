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

export class Inventory implements IModel {
    private inventoryId: string|null = null;
    private inventoryName: string|null = null;
    private userId: string|null = null;
    private currentInventoryCapacityUsage: number|null = null;
    private currentInventoryMaxCapacity: number|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getInventoryId(): string|null {
        return this.inventoryId;
    }

    public setInventoryId(inventoryId: string|null) {
        this.inventoryId = inventoryId;
        return this;
    }

    public withInventoryId(inventoryId: string|null): this {
        this.inventoryId = inventoryId;
        return this;
    }

    public getInventoryName(): string|null {
        return this.inventoryName;
    }

    public setInventoryName(inventoryName: string|null) {
        this.inventoryName = inventoryName;
        return this;
    }

    public withInventoryName(inventoryName: string|null): this {
        this.inventoryName = inventoryName;
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

    public getCurrentInventoryCapacityUsage(): number|null {
        return this.currentInventoryCapacityUsage;
    }

    public setCurrentInventoryCapacityUsage(currentInventoryCapacityUsage: number|null) {
        this.currentInventoryCapacityUsage = currentInventoryCapacityUsage;
        return this;
    }

    public withCurrentInventoryCapacityUsage(currentInventoryCapacityUsage: number|null): this {
        this.currentInventoryCapacityUsage = currentInventoryCapacityUsage;
        return this;
    }

    public getCurrentInventoryMaxCapacity(): number|null {
        return this.currentInventoryMaxCapacity;
    }

    public setCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number|null) {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
        return this;
    }

    public withCurrentInventoryMaxCapacity(currentInventoryMaxCapacity: number|null): this {
        this.currentInventoryMaxCapacity = currentInventoryMaxCapacity;
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

    public static fromDict(data: {[key: string]: any}): Inventory|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Inventory()
            .withInventoryId(data["inventoryId"])
            .withInventoryName(data["inventoryName"])
            .withUserId(data["userId"])
            .withCurrentInventoryCapacityUsage(data["currentInventoryCapacityUsage"])
            .withCurrentInventoryMaxCapacity(data["currentInventoryMaxCapacity"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "inventoryId": this.getInventoryId(),
            "inventoryName": this.getInventoryName(),
            "userId": this.getUserId(),
            "currentInventoryCapacityUsage": this.getCurrentInventoryCapacityUsage(),
            "currentInventoryMaxCapacity": this.getCurrentInventoryMaxCapacity(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
