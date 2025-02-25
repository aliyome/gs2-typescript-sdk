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

export class Account implements IModel {
    private accountId: string|null = null;
    private userId: string|null = null;
    private password: string|null = null;
    private timeOffset: number|null = null;
    private createdAt: number|null = null;

    public getAccountId(): string|null {
        return this.accountId;
    }

    public setAccountId(accountId: string|null) {
        this.accountId = accountId;
        return this;
    }

    public withAccountId(accountId: string|null): this {
        this.accountId = accountId;
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

    public getPassword(): string|null {
        return this.password;
    }

    public setPassword(password: string|null) {
        this.password = password;
        return this;
    }

    public withPassword(password: string|null): this {
        this.password = password;
        return this;
    }

    public getTimeOffset(): number|null {
        return this.timeOffset;
    }

    public setTimeOffset(timeOffset: number|null) {
        this.timeOffset = timeOffset;
        return this;
    }

    public withTimeOffset(timeOffset: number|null): this {
        this.timeOffset = timeOffset;
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

    public static fromDict(data: {[key: string]: any}): Account|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Account()
            .withAccountId(data["accountId"])
            .withUserId(data["userId"])
            .withPassword(data["password"])
            .withTimeOffset(data["timeOffset"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "accountId": this.getAccountId(),
            "userId": this.getUserId(),
            "password": this.getPassword(),
            "timeOffset": this.getTimeOffset(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
