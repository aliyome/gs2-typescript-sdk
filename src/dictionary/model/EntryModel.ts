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

export class EntryModel implements IModel {
    private entryModelId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;

    public getEntryModelId(): string|null {
        return this.entryModelId;
    }

    public setEntryModelId(entryModelId: string|null) {
        this.entryModelId = entryModelId;
        return this;
    }

    public withEntryModelId(entryModelId: string|null): this {
        this.entryModelId = entryModelId;
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

    public static fromDict(data: {[key: string]: any}): EntryModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new EntryModel()
            .withEntryModelId(data["entryModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "entryModelId": this.getEntryModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
        };
    }
}
