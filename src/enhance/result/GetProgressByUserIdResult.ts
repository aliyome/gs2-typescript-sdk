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

import * as Gs2Enhance from '../model'

export class GetProgressByUserIdResult implements IResult {
    private item: Gs2Enhance.Progress|null = null;
    private rateModel: Gs2Enhance.RateModel|null = null;

    public getItem(): Gs2Enhance.Progress|null {
        return this.item;
    }

    public setItem(item: Gs2Enhance.Progress|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Enhance.Progress|null): this {
        this.item = item;
        return this;
    }

    public getRateModel(): Gs2Enhance.RateModel|null {
        return this.rateModel;
    }

    public setRateModel(rateModel: Gs2Enhance.RateModel|null) {
        this.rateModel = rateModel;
        return this;
    }

    public withRateModel(rateModel: Gs2Enhance.RateModel|null): this {
        this.rateModel = rateModel;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetProgressByUserIdResult {
        return new GetProgressByUserIdResult()
            .withItem(Gs2Enhance.Progress.fromDict(data["item"]))
            .withRateModel(Gs2Enhance.RateModel.fromDict(data["rateModel"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "rateModel": this.getRateModel()?.toDict(),
        };
    }
}
