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

export class TakeOver implements IModel {
    private takeOverId: string|null = null;
    private userId: string|null = null;
    private type: number|null = null;
    private userIdentifier: string|null = null;
    private password: string|null = null;
    private createdAt: number|null = null;

    public getTakeOverId(): string|null {
        return this.takeOverId;
    }

    public setTakeOverId(takeOverId: string|null) {
        this.takeOverId = takeOverId;
        return this;
    }

    public withTakeOverId(takeOverId: string|null): this {
        this.takeOverId = takeOverId;
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

    public getType(): number|null {
        return this.type;
    }

    public setType(type: number|null) {
        this.type = type;
        return this;
    }

    public withType(type: number|null): this {
        this.type = type;
        return this;
    }

    public getUserIdentifier(): string|null {
        return this.userIdentifier;
    }

    public setUserIdentifier(userIdentifier: string|null) {
        this.userIdentifier = userIdentifier;
        return this;
    }

    public withUserIdentifier(userIdentifier: string|null): this {
        this.userIdentifier = userIdentifier;
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

    public static fromDict(data: {[key: string]: any}): TakeOver|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new TakeOver()
            .withTakeOverId(data["takeOverId"])
            .withUserId(data["userId"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"])
            .withPassword(data["password"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "takeOverId": this.getTakeOverId(),
            "userId": this.getUserId(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
            "password": this.getPassword(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
