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

import * as Gs2Inventory from '../model'

export class AcquireItemSetByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private inventoryName: string|null = null;
    private itemName: string|null = null;
    private userId: string|null = null;
    private acquireCount: number|null = null;
    private expiresAt: number|null = null;
    private createNewItemSet: boolean|null = null;
    private itemSetName: string|null = null;

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

    public getItemName(): string|null {
        return this.itemName;
    }

    public setItemName(itemName: string|null) {
        this.itemName = itemName;
        return this;
    }

    public withItemName(itemName: string|null): this {
        this.itemName = itemName;
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

    public getAcquireCount(): number|null {
        return this.acquireCount;
    }

    public setAcquireCount(acquireCount: number|null) {
        this.acquireCount = acquireCount;
        return this;
    }

    public withAcquireCount(acquireCount: number|null): this {
        this.acquireCount = acquireCount;
        return this;
    }

    public getExpiresAt(): number|null {
        return this.expiresAt;
    }

    public setExpiresAt(expiresAt: number|null) {
        this.expiresAt = expiresAt;
        return this;
    }

    public withExpiresAt(expiresAt: number|null): this {
        this.expiresAt = expiresAt;
        return this;
    }

    public getCreateNewItemSet(): boolean|null {
        return this.createNewItemSet;
    }

    public setCreateNewItemSet(createNewItemSet: boolean|null) {
        this.createNewItemSet = createNewItemSet;
        return this;
    }

    public withCreateNewItemSet(createNewItemSet: boolean|null): this {
        this.createNewItemSet = createNewItemSet;
        return this;
    }

    public getItemSetName(): string|null {
        return this.itemSetName;
    }

    public setItemSetName(itemSetName: string|null) {
        this.itemSetName = itemSetName;
        return this;
    }

    public withItemSetName(itemSetName: string|null): this {
        this.itemSetName = itemSetName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AcquireItemSetByUserIdRequest {
        return new AcquireItemSetByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withUserId(data["userId"])
            .withAcquireCount(data["acquireCount"])
            .withExpiresAt(data["expiresAt"])
            .withCreateNewItemSet(data["createNewItemSet"])
            .withItemSetName(data["itemSetName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "userId": this.getUserId(),
            "acquireCount": this.getAcquireCount(),
            "expiresAt": this.getExpiresAt(),
            "createNewItemSet": this.getCreateNewItemSet(),
            "itemSetName": this.getItemSetName(),
        };
    }
}