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

import * as Gs2Dictionary from '../model'

export class GetEntryWithSignatureResult implements IResult {
    private item: Gs2Dictionary.Entry|null = null;
    private body: string|null = null;
    private signature: string|null = null;

    public getItem(): Gs2Dictionary.Entry|null {
        return this.item;
    }

    public setItem(item: Gs2Dictionary.Entry|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Dictionary.Entry|null): this {
        this.item = item;
        return this;
    }

    public getBody(): string|null {
        return this.body;
    }

    public setBody(body: string|null) {
        this.body = body;
        return this;
    }

    public withBody(body: string|null): this {
        this.body = body;
        return this;
    }

    public getSignature(): string|null {
        return this.signature;
    }

    public setSignature(signature: string|null) {
        this.signature = signature;
        return this;
    }

    public withSignature(signature: string|null): this {
        this.signature = signature;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetEntryWithSignatureResult {
        return new GetEntryWithSignatureResult()
            .withItem(Gs2Dictionary.Entry.fromDict(data["item"]))
            .withBody(data["body"])
            .withSignature(data["signature"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    }
}
