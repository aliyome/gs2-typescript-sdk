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
import { Version } from './Version';

export class AcceptVersion implements IModel {
    private acceptVersionId: string|null = null;
    private versionName: string|null = null;
    private userId: string|null = null;
    private version: Version|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getAcceptVersionId(): string|null {
        return this.acceptVersionId;
    }

    public setAcceptVersionId(acceptVersionId: string|null) {
        this.acceptVersionId = acceptVersionId;
        return this;
    }

    public withAcceptVersionId(acceptVersionId: string|null): this {
        this.acceptVersionId = acceptVersionId;
        return this;
    }

    public getVersionName(): string|null {
        return this.versionName;
    }

    public setVersionName(versionName: string|null) {
        this.versionName = versionName;
        return this;
    }

    public withVersionName(versionName: string|null): this {
        this.versionName = versionName;
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

    public getVersion(): Version|null {
        return this.version;
    }

    public setVersion(version: Version|null) {
        this.version = version;
        return this;
    }

    public withVersion(version: Version|null): this {
        this.version = version;
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

    public static fromDict(data: {[key: string]: any}): AcceptVersion|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcceptVersion()
            .withAcceptVersionId(data["acceptVersionId"])
            .withVersionName(data["versionName"])
            .withUserId(data["userId"])
            .withVersion(Version.fromDict(data["version"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "acceptVersionId": this.getAcceptVersionId(),
            "versionName": this.getVersionName(),
            "userId": this.getUserId(),
            "version": this.getVersion()?.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
