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

export class Inbox implements IModel {
    private inboxId: string|null = null;
    private userId: string|null = null;
    private fromUserIds: string[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getInboxId(): string|null {
        return this.inboxId;
    }

    public setInboxId(inboxId: string|null) {
        this.inboxId = inboxId;
        return this;
    }

    public withInboxId(inboxId: string|null): this {
        this.inboxId = inboxId;
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

    public getFromUserIds(): string[]|null {
        return this.fromUserIds;
    }

    public setFromUserIds(fromUserIds: string[]|null) {
        this.fromUserIds = fromUserIds;
        return this;
    }

    public withFromUserIds(fromUserIds: string[]|null): this {
        this.fromUserIds = fromUserIds;
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

    public static fromDict(data: {[key: string]: any}): Inbox|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Inbox()
            .withInboxId(data["inboxId"])
            .withUserId(data["userId"])
            .withFromUserIds(data.fromUserIds ?
                data.fromUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "inboxId": this.getInboxId(),
            "userId": this.getUserId(),
            "fromUserIds": this.getFromUserIds() ?
                this.getFromUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
