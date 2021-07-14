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

import * as Gs2Distributor from '../model'

export class DistributeRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private distributorName: string|null = null;
    private userId: string|null = null;
    private distributeResource: Gs2Distributor.DistributeResource|null = null;

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

    public getDistributorName(): string|null {
        return this.distributorName;
    }

    public setDistributorName(distributorName: string|null) {
        this.distributorName = distributorName;
        return this;
    }

    public withDistributorName(distributorName: string|null): this {
        this.distributorName = distributorName;
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

    public getDistributeResource(): Gs2Distributor.DistributeResource|null {
        return this.distributeResource;
    }

    public setDistributeResource(distributeResource: Gs2Distributor.DistributeResource|null) {
        this.distributeResource = distributeResource;
        return this;
    }

    public withDistributeResource(distributeResource: Gs2Distributor.DistributeResource|null): this {
        this.distributeResource = distributeResource;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DistributeRequest {
        return new DistributeRequest()
            .withNamespaceName(data["namespaceName"])
            .withDistributorName(data["distributorName"])
            .withUserId(data["userId"])
            .withDistributeResource(Gs2Distributor.DistributeResource.fromDict(data["distributeResource"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "distributorName": this.getDistributorName(),
            "userId": this.getUserId(),
            "distributeResource": this.getDistributeResource()?.toDict(),
        };
    }
}