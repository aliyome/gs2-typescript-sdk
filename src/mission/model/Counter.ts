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
import { ScopedValue } from './ScopedValue';

export class Counter implements IModel {
    private counterId: string|null = null;
    private userId: string|null = null;
    private name: string|null = null;
    private values: ScopedValue[]|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getCounterId(): string|null {
        return this.counterId;
    }

    public setCounterId(counterId: string|null) {
        this.counterId = counterId;
        return this;
    }

    public withCounterId(counterId: string|null): this {
        this.counterId = counterId;
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

    public getValues(): ScopedValue[]|null {
        return this.values;
    }

    public setValues(values: ScopedValue[]|null) {
        this.values = values;
        return this;
    }

    public withValues(values: ScopedValue[]|null): this {
        this.values = values;
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

    public static fromDict(data: {[key: string]: any}): Counter|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Counter()
            .withCounterId(data["counterId"])
            .withUserId(data["userId"])
            .withName(data["name"])
            .withValues(data.values ?
                data.values.map((item: {[key: string]: any}) => {
                    return ScopedValue.fromDict(item);
                }
            ) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "counterId": this.getCounterId(),
            "userId": this.getUserId(),
            "name": this.getName(),
            "values": this.getValues() ?
                this.getValues()!.map((item: ScopedValue) => {
                    return item.toDict();
                }
            ) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
