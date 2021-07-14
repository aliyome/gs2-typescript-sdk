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

import IRequest from '@/gs2/core/interface/IRequest';

import * as Gs2Limit from '../model'

export class CountUpByStampTaskRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private stampTask: string|null = null;
    private keyId: string|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }

    public getStampTask(): string|null {
        return this.stampTask;
    }

    public setStampTask(stampTask: string|null) {
        this.stampTask = stampTask;
        return this;
    }

    public withStampTask(stampTask: string|null): this {
        this.stampTask = stampTask;
        return this;
    }

    public getKeyId(): string|null {
        return this.keyId;
    }

    public setKeyId(keyId: string|null) {
        this.keyId = keyId;
        return this;
    }

    public withKeyId(keyId: string|null): this {
        this.keyId = keyId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CountUpByStampTaskRequest {
        return new CountUpByStampTaskRequest()
            .withStampTask(data["stampTask"])
            .withKeyId(data["keyId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "stampTask": this.getStampTask(),
            "keyId": this.getKeyId(),
        };
    }
}