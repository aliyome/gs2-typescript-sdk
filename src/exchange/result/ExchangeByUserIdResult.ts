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

import * as Gs2Exchange from '../model'

export class ExchangeByUserIdResult implements IResult {
    private item: Gs2Exchange.RateModel|null = null;
    private stampSheet: string|null = null;
    private stampSheetEncryptionKeyId: string|null = null;

    public getItem(): Gs2Exchange.RateModel|null {
        return this.item;
    }

    public setItem(item: Gs2Exchange.RateModel|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Exchange.RateModel|null): this {
        this.item = item;
        return this;
    }

    public getStampSheet(): string|null {
        return this.stampSheet;
    }

    public setStampSheet(stampSheet: string|null) {
        this.stampSheet = stampSheet;
        return this;
    }

    public withStampSheet(stampSheet: string|null): this {
        this.stampSheet = stampSheet;
        return this;
    }

    public getStampSheetEncryptionKeyId(): string|null {
        return this.stampSheetEncryptionKeyId;
    }

    public setStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string|null) {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    }

    public withStampSheetEncryptionKeyId(stampSheetEncryptionKeyId: string|null): this {
        this.stampSheetEncryptionKeyId = stampSheetEncryptionKeyId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExchangeByUserIdResult {
        return new ExchangeByUserIdResult()
            .withItem(Gs2Exchange.RateModel.fromDict(data["item"]))
            .withStampSheet(data["stampSheet"])
            .withStampSheetEncryptionKeyId(data["stampSheetEncryptionKeyId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "stampSheet": this.getStampSheet(),
            "stampSheetEncryptionKeyId": this.getStampSheetEncryptionKeyId(),
        };
    }
}
