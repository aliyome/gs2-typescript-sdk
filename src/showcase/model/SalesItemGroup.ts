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
import { ConsumeAction } from './ConsumeAction';
import { AcquireAction } from './AcquireAction';
import { SalesItem } from './SalesItem';

export class SalesItemGroup implements IModel {
    private name: string|null = null;
    private metadata: string|null = null;
    private salesItems: SalesItem[]|null = null;

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

    public getSalesItems(): SalesItem[]|null {
        return this.salesItems;
    }

    public setSalesItems(salesItems: SalesItem[]|null) {
        this.salesItems = salesItems;
        return this;
    }

    public withSalesItems(salesItems: SalesItem[]|null): this {
        this.salesItems = salesItems;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SalesItemGroup|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SalesItemGroup()
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withSalesItems(data.salesItems ?
                data.salesItems.map((item: {[key: string]: any}) => {
                    return SalesItem.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "salesItems": this.getSalesItems() ?
                this.getSalesItems()!.map((item: SalesItem) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
