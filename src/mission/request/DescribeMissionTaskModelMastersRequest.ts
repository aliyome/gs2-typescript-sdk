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

import * as Gs2Mission from '../model'

export class DescribeMissionTaskModelMastersRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private missionGroupName: string|null = null;
    private pageToken: string|null = null;
    private limit: number|null = null;

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

    public getMissionGroupName(): string|null {
        return this.missionGroupName;
    }

    public setMissionGroupName(missionGroupName: string|null) {
        this.missionGroupName = missionGroupName;
        return this;
    }

    public withMissionGroupName(missionGroupName: string|null): this {
        this.missionGroupName = missionGroupName;
        return this;
    }

    public getPageToken(): string|null {
        return this.pageToken;
    }

    public setPageToken(pageToken: string|null) {
        this.pageToken = pageToken;
        return this;
    }

    public withPageToken(pageToken: string|null): this {
        this.pageToken = pageToken;
        return this;
    }

    public getLimit(): number|null {
        return this.limit;
    }

    public setLimit(limit: number|null) {
        this.limit = limit;
        return this;
    }

    public withLimit(limit: number|null): this {
        this.limit = limit;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DescribeMissionTaskModelMastersRequest {
        return new DescribeMissionTaskModelMastersRequest()
            .withNamespaceName(data["namespaceName"])
            .withMissionGroupName(data["missionGroupName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "missionGroupName": this.getMissionGroupName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    }
}