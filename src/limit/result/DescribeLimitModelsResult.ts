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

import * as Gs2Limit from '../model'

export class DescribeLimitModelsResult implements IResult {
    private items: Gs2Limit.LimitModel[]|null = null;

    public getItems(): Gs2Limit.LimitModel[]|null {
        return this.items;
    }

    public setItems(items: Gs2Limit.LimitModel[]|null) {
        this.items = items;
        return this;
    }

    public withItems(items: Gs2Limit.LimitModel[]|null): this {
        this.items = items;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DescribeLimitModelsResult {
        return new DescribeLimitModelsResult()
            .withItems(data.items ?
                data.items.map((item: {[key: string]: any}) => {
                    return Gs2Limit.LimitModel.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "items": this.getItems() ?
                this.getItems()!.map((item: Gs2Limit.LimitModel) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
