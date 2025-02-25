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

export class AttributeRange implements IModel {
    private name: string|null = null;
    private min: number|null = null;
    private max: number|null = null;

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

    public getMin(): number|null {
        return this.min;
    }

    public setMin(min: number|null) {
        this.min = min;
        return this;
    }

    public withMin(min: number|null): this {
        this.min = min;
        return this;
    }

    public getMax(): number|null {
        return this.max;
    }

    public setMax(max: number|null) {
        this.max = max;
        return this;
    }

    public withMax(max: number|null): this {
        this.max = max;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AttributeRange|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AttributeRange()
            .withName(data["name"])
            .withMin(data["min"])
            .withMax(data["max"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "min": this.getMin(),
            "max": this.getMax(),
        };
    }
}
