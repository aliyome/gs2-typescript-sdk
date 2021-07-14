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
import { AcquireAction } from './AcquireAction';

export class Prize implements IModel {
    private prizeId: string|null = null;
    private type: string|null = null;
    private acquireActions: AcquireAction[]|null = null;
    private prizeTableName: string|null = null;
    private weight: number|null = null;

    public getPrizeId(): string|null {
        return this.prizeId;
    }

    public setPrizeId(prizeId: string|null) {
        this.prizeId = prizeId;
        return this;
    }

    public withPrizeId(prizeId: string|null): this {
        this.prizeId = prizeId;
        return this;
    }

    public getType(): string|null {
        return this.type;
    }

    public setType(type: string|null) {
        this.type = type;
        return this;
    }

    public withType(type: string|null): this {
        this.type = type;
        return this;
    }

    public getAcquireActions(): AcquireAction[]|null {
        return this.acquireActions;
    }

    public setAcquireActions(acquireActions: AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }

    public withAcquireActions(acquireActions: AcquireAction[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }

    public getPrizeTableName(): string|null {
        return this.prizeTableName;
    }

    public setPrizeTableName(prizeTableName: string|null) {
        this.prizeTableName = prizeTableName;
        return this;
    }

    public withPrizeTableName(prizeTableName: string|null): this {
        this.prizeTableName = prizeTableName;
        return this;
    }

    public getWeight(): number|null {
        return this.weight;
    }

    public setWeight(weight: number|null) {
        this.weight = weight;
        return this;
    }

    public withWeight(weight: number|null): this {
        this.weight = weight;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Prize|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Prize()
            .withPrizeId(data["prizeId"])
            .withType(data["type"])
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : [])
            .withPrizeTableName(data["prizeTableName"])
            .withWeight(data["weight"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "prizeId": this.getPrizeId(),
            "type": this.getType(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "prizeTableName": this.getPrizeTableName(),
            "weight": this.getWeight(),
        };
    }
}
