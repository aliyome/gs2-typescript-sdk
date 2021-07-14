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

import IResult from '@/gs2/core/interface/IResult';

import * as Gs2Lottery from '../model'

export class UpdatePrizeTableMasterResult implements IResult {
    private item: Gs2Lottery.PrizeTableMaster|null = null;

    public getItem(): Gs2Lottery.PrizeTableMaster|null {
        return this.item;
    }

    public setItem(item: Gs2Lottery.PrizeTableMaster|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Lottery.PrizeTableMaster|null): this {
        this.item = item;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdatePrizeTableMasterResult {
        return new UpdatePrizeTableMasterResult()
            .withItem(Gs2Lottery.PrizeTableMaster.fromDict(data["item"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
        };
    }
}
