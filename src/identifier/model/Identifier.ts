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

export class Identifier implements IModel {
    private clientId: string|null = null;
    private userName: string|null = null;
    private clientSecret: string|null = null;
    private createdAt: number|null = null;

    public getClientId(): string|null {
        return this.clientId;
    }

    public setClientId(clientId: string|null) {
        this.clientId = clientId;
        return this;
    }

    public withClientId(clientId: string|null): this {
        this.clientId = clientId;
        return this;
    }

    public getUserName(): string|null {
        return this.userName;
    }

    public setUserName(userName: string|null) {
        this.userName = userName;
        return this;
    }

    public withUserName(userName: string|null): this {
        this.userName = userName;
        return this;
    }

    public getClientSecret(): string|null {
        return this.clientSecret;
    }

    public setClientSecret(clientSecret: string|null) {
        this.clientSecret = clientSecret;
        return this;
    }

    public withClientSecret(clientSecret: string|null): this {
        this.clientSecret = clientSecret;
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

    public static fromDict(data: {[key: string]: any}): Identifier|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Identifier()
            .withClientId(data["clientId"])
            .withUserName(data["userName"])
            .withClientSecret(data["clientSecret"])
            .withCreatedAt(data["createdAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "clientId": this.getClientId(),
            "userName": this.getUserName(),
            "clientSecret": this.getClientSecret(),
            "createdAt": this.getCreatedAt(),
        };
    }
}
