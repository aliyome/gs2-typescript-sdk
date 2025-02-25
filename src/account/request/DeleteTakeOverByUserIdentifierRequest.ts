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

import * as Gs2Account from '../model'

export class DeleteTakeOverByUserIdentifierRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private type: number|null = null;
    private userIdentifier: string|null = null;

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

    public getNamespaceName(): string|null {
        return this.namespaceName;
    }

    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }

    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }

    public getType(): number|null {
        return this.type;
    }

    public setType(type: number|null) {
        this.type = type;
        return this;
    }

    public withType(type: number|null): this {
        this.type = type;
        return this;
    }

    public getUserIdentifier(): string|null {
        return this.userIdentifier;
    }

    public setUserIdentifier(userIdentifier: string|null) {
        this.userIdentifier = userIdentifier;
        return this;
    }

    public withUserIdentifier(userIdentifier: string|null): this {
        this.userIdentifier = userIdentifier;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DeleteTakeOverByUserIdentifierRequest {
        return new DeleteTakeOverByUserIdentifierRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"])
            .withUserIdentifier(data["userIdentifier"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
            "userIdentifier": this.getUserIdentifier(),
        };
    }
}