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

export class UpdateItemModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private inventoryName: string|null = null;
    private itemName: string|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private stackingLimit: number|null = null;
    private allowMultipleStacks: boolean|null = null;
    private sortValue: number|null = null;

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

    public getStackingLimit(): number|null {
        return this.stackingLimit;
    }

    public setStackingLimit(stackingLimit: number|null) {
        this.stackingLimit = stackingLimit;
        return this;
    }

    public withStackingLimit(stackingLimit: number|null): this {
        this.stackingLimit = stackingLimit;
        return this;
    }

    public getAllowMultipleStacks(): boolean|null {
        return this.allowMultipleStacks;
    }

    public setAllowMultipleStacks(allowMultipleStacks: boolean|null) {
        this.allowMultipleStacks = allowMultipleStacks;
        return this;
    }

    public withAllowMultipleStacks(allowMultipleStacks: boolean|null): this {
        this.allowMultipleStacks = allowMultipleStacks;
        return this;
    }

    public getSortValue(): number|null {
        return this.sortValue;
    }

    public setSortValue(sortValue: number|null) {
        this.sortValue = sortValue;
        return this;
    }

    public withSortValue(sortValue: number|null): this {
        this.sortValue = sortValue;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateItemModelMasterRequest {
        return new UpdateItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withInventoryName(data["inventoryName"])
            .withItemName(data["itemName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withStackingLimit(data["stackingLimit"])
            .withAllowMultipleStacks(data["allowMultipleStacks"])
            .withSortValue(data["sortValue"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "inventoryName": this.getInventoryName(),
            "itemName": this.getItemName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "stackingLimit": this.getStackingLimit(),
            "allowMultipleStacks": this.getAllowMultipleStacks(),
            "sortValue": this.getSortValue(),
        };
    }
}