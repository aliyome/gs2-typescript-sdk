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

export class FirebaseToken implements IModel {
    private firebaseTokenId: string|null = null;
    private userId: string|null = null;
    private token: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getFirebaseTokenId(): string|null {
        return this.firebaseTokenId;
    }

    public setFirebaseTokenId(firebaseTokenId: string|null) {
        this.firebaseTokenId = firebaseTokenId;
        return this;
    }

    public withFirebaseTokenId(firebaseTokenId: string|null): this {
        this.firebaseTokenId = firebaseTokenId;
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

    public getToken(): string|null {
        return this.token;
    }

    public setToken(token: string|null) {
        this.token = token;
        return this;
    }

    public withToken(token: string|null): this {
        this.token = token;
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

    public static fromDict(data: {[key: string]: any}): FirebaseToken|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FirebaseToken()
            .withFirebaseTokenId(data["firebaseTokenId"])
            .withUserId(data["userId"])
            .withToken(data["token"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "firebaseTokenId": this.getFirebaseTokenId(),
            "userId": this.getUserId(),
            "token": this.getToken(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
