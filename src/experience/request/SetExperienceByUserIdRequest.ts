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

import * as Gs2Experience from '../model'

export class SetExperienceByUserIdRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private userId: string|null = null;
    private experienceName: string|null = null;
    private propertyId: string|null = null;
    private experienceValue: number|null = null;

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

    public getExperienceName(): string|null {
        return this.experienceName;
    }

    public setExperienceName(experienceName: string|null) {
        this.experienceName = experienceName;
        return this;
    }

    public withExperienceName(experienceName: string|null): this {
        this.experienceName = experienceName;
        return this;
    }

    public getPropertyId(): string|null {
        return this.propertyId;
    }

    public setPropertyId(propertyId: string|null) {
        this.propertyId = propertyId;
        return this;
    }

    public withPropertyId(propertyId: string|null): this {
        this.propertyId = propertyId;
        return this;
    }

    public getExperienceValue(): number|null {
        return this.experienceValue;
    }

    public setExperienceValue(experienceValue: number|null) {
        this.experienceValue = experienceValue;
        return this;
    }

    public withExperienceValue(experienceValue: number|null): this {
        this.experienceValue = experienceValue;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SetExperienceByUserIdRequest {
        return new SetExperienceByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withExperienceName(data["experienceName"])
            .withPropertyId(data["propertyId"])
            .withExperienceValue(data["experienceValue"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "experienceName": this.getExperienceName(),
            "propertyId": this.getPropertyId(),
            "experienceValue": this.getExperienceValue(),
        };
    }
}