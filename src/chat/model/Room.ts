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

export class Room implements IModel {
    private roomId: string|null = null;
    private name: string|null = null;
    private userId: string|null = null;
    private metadata: string|null = null;
    private password: string|null = null;
    private whiteListUserIds: string[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getRoomId(): string|null {
        return this.roomId;
    }

    public setRoomId(roomId: string|null) {
        this.roomId = roomId;
        return this;
    }

    public withRoomId(roomId: string|null): this {
        this.roomId = roomId;
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

    public getMetadata(): string|null {
        return this.metadata;
    }

    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }

    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
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

    public getWhiteListUserIds(): string[]|null {
        return this.whiteListUserIds;
    }

    public setWhiteListUserIds(whiteListUserIds: string[]|null) {
        this.whiteListUserIds = whiteListUserIds;
        return this;
    }

    public withWhiteListUserIds(whiteListUserIds: string[]|null): this {
        this.whiteListUserIds = whiteListUserIds;
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

    public static fromDict(data: {[key: string]: any}): Room|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Room()
            .withRoomId(data["roomId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withMetadata(data["metadata"])
            .withPassword(data["password"])
            .withWhiteListUserIds(data.whiteListUserIds ?
                data.whiteListUserIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "roomId": this.getRoomId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "metadata": this.getMetadata(),
            "password": this.getPassword(),
            "whiteListUserIds": this.getWhiteListUserIds() ?
                this.getWhiteListUserIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
