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

export class GitHubApiKey implements IModel {
    private apiKeyId: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private encryptionKeyName: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getApiKeyId(): string|null {
        return this.apiKeyId;
    }

    public setApiKeyId(apiKeyId: string|null) {
        this.apiKeyId = apiKeyId;
        return this;
    }

    public withApiKeyId(apiKeyId: string|null): this {
        this.apiKeyId = apiKeyId;
        return this;
    }

    public getName(): string|null {
        return this.name;
    }

    public setName(name: string|null) {
        this.name = name;
        return this;
    }

    public withName(name: string|null): this {
        this.name = name;
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

    public getEncryptionKeyName(): string|null {
        return this.encryptionKeyName;
    }

    public setEncryptionKeyName(encryptionKeyName: string|null) {
        this.encryptionKeyName = encryptionKeyName;
        return this;
    }

    public withEncryptionKeyName(encryptionKeyName: string|null): this {
        this.encryptionKeyName = encryptionKeyName;
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

    public static fromDict(data: {[key: string]: any}): GitHubApiKey|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GitHubApiKey()
            .withApiKeyId(data["apiKeyId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withEncryptionKeyName(data["encryptionKeyName"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "apiKeyId": this.getApiKeyId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "encryptionKeyName": this.getEncryptionKeyName(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
